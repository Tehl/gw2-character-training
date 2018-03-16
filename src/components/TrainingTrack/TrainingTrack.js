import React from "react";

import ProgressBar from "../ProgressBar/ProgressBar";

import "./TrainingTrack.less";

const TrainingTrack = ({ track }) => (
  <div className="training-track">
    <h2>{track.name}</h2>
    <img src={track.icon} className="icon" />
    <ProgressBar
      primaryProgress={track.progress}
      text={track.current + " / " + track.totalCost}
    />
  </div>
);

export default TrainingTrack;
