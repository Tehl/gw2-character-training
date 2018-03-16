import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import App from "./components/App";
import { initialize } from "./urlState";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

initialize(store);

/* dev */
import { setApiKey } from "./urlState";
import apiKey from "./apiKey";
setApiKey(apiKey);
