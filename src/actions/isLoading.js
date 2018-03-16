import { LOADING_STATE_CHANGED } from "../reducers/isLoading";

function setLoadingState(isLoading) {
  return {
    type: LOADING_STATE_CHANGED,
    payload: {
      isLoading
    }
  };
}

export { setLoadingState };
