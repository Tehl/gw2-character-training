import { connect } from "react-redux";

import Options from "./Options";
import { setVisibility } from "../../actions/options";

const mapStateToProps = state => ({
  showSkills: state.options.visibility.skills,
  showSpecs: state.options.visibility.specs,
  showEliteSpecs: state.options.visibility.eliteSpecs
});

const mapDispatchToProps = dispatch => ({
  onVisibilityChanged: (type, isVisible) =>
    dispatch(setVisibility(type, isVisible))
});

const OptionsContainer = connect(mapStateToProps, mapDispatchToProps)(Options);

export default OptionsContainer;
