import React from "react";
import CharacterProfile from "../CharacterProfile/Container";

import "./CharacterList.less";

const CharacterList = ({ characters }) => {
  const rows = [];
  const columns = 3;

  for (let i = 0; i < characters.length; i += columns) {
    const row = [];
    for (let j = 0; j < columns; j += 1) {
      const character = characters[i + j];
      if (character) {
        row.push(<CharacterProfile key={character.id} character={character} />);
      }
    }
    rows.push(row);
  }

  return (
    <div className="character-list">
      {rows.map((row, idx) => (
        <div key={idx} className="row gutters">
          {row}
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
