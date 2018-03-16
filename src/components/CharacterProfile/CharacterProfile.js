import React from "react";

import TrainingTrack from "../TrainingTrack/TrainingTrack";

import "./CharacterProfile.less";

function formatProgressPercent(progress) {
  return Math.floor(progress * 1000) / 10 + "%";
}

const CharacterProfile = ({
  character,
  showSkills,
  showSpecs,
  showEliteSpecs
}) => {
  let current = 0;
  let total = 0;

  const sumTrack = o => {
    current += o.current;
    total += o.totalCost;
  };

  if (showSkills) {
    character.skills.forEach(sumTrack);
  }
  if (showSpecs) {
    character.specs.forEach(sumTrack);
  }
  if (showEliteSpecs) {
    character.eliteSpecs.forEach(sumTrack);
  }

  let progress;
  let progressTooltip;
  if (total > 0) {
    progress = formatProgressPercent(current / total);
    progressTooltip = current + " / " + total;
  }

  return (
    <div className="col col-4 character-profile">
      <div className="details">
        <span className="progress" title={progressTooltip}>
          {progress}
        </span>
        <h1 className="name">{character.name}</h1>
        <span className="profession">
          {character.level} {character.profession}
        </span>
      </div>
      {showSkills && (
        <div className="training-block skills">
          {character.skills.map(skill => (
            <TrainingTrack key={skill.id} track={skill} />
          ))}
        </div>
      )}
      {showSpecs && (
        <div className="training-block specs">
          {character.specs.map(spec => (
            <TrainingTrack key={spec.id} track={spec} />
          ))}
        </div>
      )}
      {showEliteSpecs && (
        <div className="training-block eliteSpecs">
          {character.eliteSpecs.map(spec => (
            <TrainingTrack key={spec.id} track={spec} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterProfile;
