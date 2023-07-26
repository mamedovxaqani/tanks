import UserTank from "./classes/UserTank";
import keyDownEvent from "./functions/keyDownEvent";
import startGame from "./functions/startGame";

function App() {
  const start__game = document.querySelector(".game__start");
  const canvas = document.querySelector(".canvas");
  const context = canvas.getContext("2d");
  const tank = new UserTank("orange", 25, 15);
  tank.draw(context);
  keyDownEvent(tank, context);

  start__game.addEventListener("click", () => {
    startGame(canvas, start__game);
  });
}

export default App;
