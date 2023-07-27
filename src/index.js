import "./assets/main.scss";
import Header from "./components/header/header";
import startGame from "./components/game/startGame";

import Canvas from "./components/canvas/canvas";
import App from "./app";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".root");

  root.append(Header(), startGame(), Canvas());
  App(root);
});
