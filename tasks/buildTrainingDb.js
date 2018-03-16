import "isomorphic-fetch";
import fs from "fs";
import prettier from "prettier";
import Gw2Api from "../src/services/Gw2Api";

const dataService = new Gw2Api();

const mapTrainingTrack = db => item => ({
  id: item.id,
  name: item.name,
  totalCost: item.track[item.track.length - 1].cost,
  icon: db[item.name] && db[item.name].icon
});

const getTrainingTracksByType = (training, type, db) =>
  training.filter(o => o.category === type).map(mapTrainingTrack(db));

const getSkillDb = professions => {
  const skillTracks = professions.reduce(
    (skills, profession) => [
      ...skills,
      ...profession.training.filter(o => o.category === "Skills")
    ],
    []
  );

  const skillDb = skillTracks.map(track => ({
    name: track.name,
    skill_id: track.track[0].skill_id
  }));

  return dataService.getSkillDetails(skillDb.map(o => o.skill_id)).then(res =>
    skillDb.map(track => ({
      ...track,
      icon: res.find(o => o.id == track.skill_id).icon
    }))
  );
};

Promise.all([
  dataService
    .getProfessionList()
    .then(professions => dataService.getProfessionDetails(professions))
    .then(professions => Promise.all([professions, getSkillDb(professions)])),
  dataService
    .getSpecializationList()
    .then(specializations =>
      dataService.getSpecializationDetails(specializations)
    )
])
  .then(res => {
    const professions = res[0][0];
    const skills = res[0][1].reduce((all, current) => {
      all[current.name] = current;
      return all;
    }, {});
    const specializations = res[1].reduce((all, current) => {
      all[current.name] = current;
      return all;
    }, {});

    const trainingData = professions.map(profession => ({
      id: profession.id,
      name: profession.name,
      skills: getTrainingTracksByType(profession.training, "Skills", skills),
      specs: getTrainingTracksByType(
        profession.training,
        "Specializations",
        specializations
      ),
      eliteSpecs: getTrainingTracksByType(
        profession.training,
        "EliteSpecializations",
        specializations
      )
    }));

    const trainingDataJson = prettier.format(JSON.stringify(trainingData), {
      parser: "json"
    });

    fs.writeFile("./data/training.json", trainingDataJson, err => {
      if (err) {
        return console.log(err);
      }

      console.log("Generated training database");
    });
  })
  .catch(console.log.bind(console));
