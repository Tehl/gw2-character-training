import React from "react";

import ApiGate from "./ApiGate/Container";
import Options from "./Options/Container";
import CharacterList from "./CharacterList/Container";
import LoadingMask from "./LoadingMask/Container";

import "./App.less";

const App = () => (
  <div className="app-container loading-frame">
    <LoadingMask />
    <ApiGate permissions={["characters", "builds"]}>
      <Options />
      <CharacterList />
    </ApiGate>
  </div>
);

export default App;
