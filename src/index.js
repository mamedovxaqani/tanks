import "./style.css"
import Header from "./components/header/header";
import Canvas from "./components/canvas/canvas";
import App from './app'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('.root')
    root.append(Header(), Canvas())

    App()
})
