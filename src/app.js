import UserTank from "./classes/UserTank";
import keyDownEvent from "./functions/keyDownEvent";
function App () {
    const tank = new UserTank('orange', 25, 15)
    const canvas = document.querySelector('.canvas')
    const context = canvas.getContext('2d')
    tank.draw(context)
    keyDownEvent(tank, context)
}

export default App