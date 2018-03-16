import { connect } from "react-redux";

import ApiGate from "./ApiGate";
import { setApiKey } from "../../urlState";

const mapStateToProps = state => ({
  hasApiKey: !!state.apiKey
});

const mapDispatchToProps = () => ({
  submitApiKey: apiKey => setApiKey(apiKey)
});

const ApiGateContainer = connect(mapStateToProps, mapDispatchToProps)(ApiGate);

export default ApiGateContainer;
