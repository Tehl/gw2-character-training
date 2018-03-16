import { OPTIONS_VISIBILITY_CHANGED } from "../reducers/options";

function setVisibility(type, isVisible) {
  return {
    type: OPTIONS_VISIBILITY_CHANGED,
    payload: {
      [type]: isVisible
    }
  };
}

export { setVisibility };
