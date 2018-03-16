const ACCOUNT_DATA_UPDATED = "ACCOUNT_DATA_UPDATED";
const ACCOUNT_DATA_RESET = "ACCOUNT_DATA_RESET";

const defaultState = {
  characters: []
};

const accountData = (state = defaultState, action) => {
  switch (action.type) {
    case ACCOUNT_DATA_UPDATED:
      return {
        ...action.payload.account
      };

    case ACCOUNT_DATA_RESET:
      return {
        ...defaultState
      };

    default:
      return state;
  }
};

export default accountData;

export { ACCOUNT_DATA_UPDATED, ACCOUNT_DATA_RESET };
