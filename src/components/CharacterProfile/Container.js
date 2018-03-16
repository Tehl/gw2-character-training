import { connect } from "react-redux";

import CharacterProfile from "./CharacterProfile";

const mapStateToProps = state => ({
  showSkills: state.options.visibility.skills,
  showSpecs: state.options.visibility.specs,
  showEliteSpecs: state.options.visibility.eliteSpecs
});

const CharacterProfileContainer = connect(mapStateToProps)(CharacterProfile);

export default CharacterProfileContainer;
