import { connect } from "react-redux";

import CharacterList from "./CharacterList";
import { getTrainingProgress } from "../../logic/training";

const mapStateToProps = state => ({
  characters: state.accountData.characters.map(getTrainingProgress)
});

const CharacterListContainer = connect(mapStateToProps)(CharacterList);

export default CharacterListContainer;
