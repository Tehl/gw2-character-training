import { connect } from "react-redux";

import LoadingMask from "./LoadingMask";

const mapStateToProps = state => ({
  isLoading: state.isLoading
});

const LoadingMaskContainer = connect(mapStateToProps)(LoadingMask);

export default LoadingMaskContainer;
