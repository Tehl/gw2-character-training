import hash from "hash-js";
import { setApiKey as setApiKeyStore } from "./actions/apiKey";

const HASH_KEY_API = "apiKey";

function initialize(store) {
  function onHashChange() {
    const apiKey = hash(HASH_KEY_API) || "";
    store.dispatch(setApiKeyStore(apiKey));
  }

  onHashChange();
  window.addEventListener("hashchange", onHashChange, false);
}

function setApiKey(apiKey) {
  hash(HASH_KEY_API, apiKey);
}

export { initialize, setApiKey };
