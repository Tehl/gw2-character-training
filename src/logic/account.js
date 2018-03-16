function characterSort(a, b) {
  if (a.level === b.level) {
    return b.age - a.age;
  }
  return b.level - a.level;
}

function getAccountData(dataService) {
  return dataService
    .getCharacters()
    .then(characters =>
      Promise.all(
        characters.map(characterId =>
          Promise.all([
            dataService.getCharacterDetails(characterId),
            dataService.getCharacterTraining(characterId)
          ]).then(res => ({
            id: characterId,
            name: res[0].name,
            profession: res[0].profession,
            level: res[0].level,
            age: res[0].age,
            training: res[1].training
          }))
        )
      )
    )
    .then(res => ({
      characters: res.sort(characterSort)
    }));
}

export { getAccountData };
