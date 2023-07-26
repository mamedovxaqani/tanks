function startGame(canvas, start__game) {
  canvas.classList.toggle("canvas__show");

  if (canvas.classList.contains("canvas__show")) {
    start__game.innerHTML = "Finish the Game";
    start__game.classList.add("game__over");
    start__game.classList.remove("game__start");
  } else if (!canvas.classList.contains("canvas__show")) {
    start__game.innerHTML = "Start the Game";
    start__game.classList.add("game__start");
    start__game.classList.remove("game__over");
  }
}








export default startGame;