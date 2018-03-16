const OPTIONS_VISIBILITY_CHANGED = "OPTIONS_VISIBILITY_CHANGED";

const defaultState = {
  visibility: {
    skills: false,
    specs: false,
    eliteSpecs: true
  }
};

const options = (state = defaultState, action) => {
  switch (action.type) {
    case OPTIONS_VISIBILITY_CHANGED:
      return {
        ...state,
        visibility: {
          ...state.visibility,
          ...action.payload
        }
      };

    default:
      return state;
  }
};

export default options;

export { OPTIONS_VISIBILITY_CHANGED };
