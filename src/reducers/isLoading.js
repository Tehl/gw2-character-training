const LOADING_STATE_CHANGED = "LOADING_STATE_CHANGED";

const isLoading = (state = false, action) => {
  switch (action.type) {
    case LOADING_STATE_CHANGED:
      return action.payload.isLoading;

    default:
      return state;
  }
};

export default isLoading;

export { LOADING_STATE_CHANGED };
