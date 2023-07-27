class UserTank {
  constructor(color, w, h) {
    this.color = color;
    this.x = 120;
    this.y = 135;
    this.w = w;
    this.h = h;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
    this.#drawMachineGun(context);
  }

  move(context, key) {
    context.reset();

    if (key === "ArrowRight") {
      this.x += 2;
      this.#drawMachineGun(context, key);
    }

    if (key === "ArrowLeft") {
      this.x -= 2;
      console.log(this.x);
      this.#drawMachineGun(context, key);
    }

    if (key === "ArrowUp") {
      this.y -= 2;
      this.#drawMachineGun(context, key);
    }

    if (key === "ArrowDown") {
      this.y += 2;
      this.#drawMachineGun(context, key);
    }

    this.draw(context);
  }
  #drawMachineGun(context, key) {
    context.beginPath();
    context.strokeStyle = "#fff";
    if (key === "ArrowRight") {
      context.moveTo(this.x + 25, this.y + 7.5);
      context.lineTo(this.x + 35, this.y + 7.5);
      context.stroke();
    }
    if (key === "ArrowLeft") {
      context.moveTo(this.x, this.y + 8.5);
      context.lineTo(this.x - 10, this.y + 8.5);
      context.stroke();
    }

    if (key === "ArrowUp") {
      context.moveTo(this.x + 12, this.y);
      context.lineTo(this.x + 12, this.y - 5);
      context.stroke();
    }

    if (key === "ArrowDown") {
      context.moveTo(this.x + 12, this.y + 15);
      context.lineTo(this.x + 12, this.y + 22);
      context.stroke();
    }
    context.stroke();
    context.closePath();
  }
}

export default UserTank;
