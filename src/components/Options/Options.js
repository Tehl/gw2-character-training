import React from "react";

import "./Options.less";

const Options = ({
  showSkills,
  showSpecs,
  showEliteSpecs,
  onVisibilityChanged
}) => {
  const onShowSkillsChanged = () => onVisibilityChanged("skills", !showSkills);
  const onShowSpecsChanged = () => onVisibilityChanged("specs", !showSpecs);
  const onShowEliteSpecsChanged = () =>
    onVisibilityChanged("eliteSpecs", !showEliteSpecs);

  return (
    <div className="row options">
      <div className="col col-12">
        <span>Show:</span>
        <label>
          <input
            type="checkbox"
            checked={showSkills}
            onChange={onShowSkillsChanged}
          />
          Skills
        </label>
        <label>
          <input
            type="checkbox"
            checked={showSpecs}
            onChange={onShowSpecsChanged}
          />
          Specializations
        </label>
        <label>
          <input
            type="checkbox"
            checked={showEliteSpecs}
            onChange={onShowEliteSpecsChanged}
          />
          Elite Specializations
        </label>
      </div>
    </div>
  );
};

export default Options;
