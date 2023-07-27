function startGame() {
  const gamestartSection = document.createElement("section");
  gamestartSection.classList.add("game__section");

  const title = document.createElement("h2");
  title.innerHTML =
    "Welcome to the world of action, adrenaline and incredible adventures! Welcome to BattleCity - where battles are calling you!";
  title.classList.add("game__title");

  const startButton = document.createElement("button");
  startButton.innerHTML = "Start the Game";
  startButton.classList.add("game__start");
  gamestartSection.append(title, startButton);
  return gamestartSection;
}

export default startGame;
