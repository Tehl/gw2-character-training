import { combineReducers } from "redux";
import apiKey from "./apiKey";
import accountData from "./accountData";
import options from "./options";
import isLoading from "./isLoading";

const app = combineReducers({
  apiKey,
  accountData,
  options,
  isLoading
});

export default app;
