import { getAccountData } from "../logic/account";
import {
  ACCOUNT_DATA_UPDATED,
  ACCOUNT_DATA_RESET
} from "../reducers/accountData";
import { setApiKey } from "../urlState";
import { setLoadingState } from "./isLoading";

function loadAccountData(dataService) {
  return dispatch => {
    dispatch(setLoadingState(true));

    return getAccountData(dataService)
      .catch(err => {
        alert(
          "An error occured while retrieving account data; please check your API key and try again"
        );

        setApiKey("");

        return undefined;
      })
      .then(res => {
        if (res) {
          dispatch({
            type: ACCOUNT_DATA_UPDATED,
            payload: {
              account: res
            }
          });
        } else {
          dispatch(resetAccountData());
        }

        dispatch(setLoadingState(false));
      });
  };
}

function resetAccountData() {
  return {
    type: ACCOUNT_DATA_RESET,
    payload: true
  };
}

export { loadAccountData, resetAccountData };
