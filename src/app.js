import UserTank from "./classes/UserTank";
import keyDownEvent from "./functions/keyDownEvent";
import startGame from "./functions/startGame";

function App(root) {
  const game__section = document.querySelector(".game__section");
  const game__start = document.querySelector(".game__start");
  const canvas = document.querySelector(".canvas");
  const context = canvas.getContext("2d");
  const tank = new UserTank("orange", 25, 15);
  tank.draw(context);
  keyDownEvent(tank, context);

  game__start.addEventListener("click", (event) => {
    startGame(canvas, event.currentTarget);
    root.removeChild(game__section);
  });
}

export default App;
