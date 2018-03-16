import trainingDb from "../../data/training";

function getTrackProgress(trackCollection, characterTraining) {
  return trackCollection.map(track => {
    const training = characterTraining.find(o => o.id == track.id);

    if (training) {
      return {
        ...track,
        current: training.spent,
        progress: training.spent / track.totalCost
      };
    }

    return {
      ...track,
      current: 0,
      progress: 0
    };
  });
}

function getTrainingProgress(character) {
  const professionData = trainingDb.find(o => o.id === character.profession);

  return {
    ...character,
    skills: getTrackProgress(professionData.skills, character.training),
    specs: getTrackProgress(professionData.specs, character.training),
    eliteSpecs: getTrackProgress(professionData.eliteSpecs, character.training)
  };
}

export { getTrainingProgress };
