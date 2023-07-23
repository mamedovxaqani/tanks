function Canvas () {
    const canvasSection = document.createElement('section')
    canvasSection.classList.add('canvas__section')

    const canvas = document.createElement('canvas')
    canvas.classList.add('canvas')
    canvasSection.append(canvas)

    return canvasSection
}

export default Canvas