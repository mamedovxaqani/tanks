function startGame() {
  const startButton = document.createElement("button");
  startButton.innerHTML = "Start Game";
  startButton.classList.add("game__start");
  return startButton;
}

export default startGame;
