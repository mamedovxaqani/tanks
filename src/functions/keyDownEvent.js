function keyDownEvent (tank, context) {
    document.addEventListener('keydown', (event) => {
        tank.move(context, event.key)
    })
}

export default keyDownEvent