export default class GFX {
  constructor(width,height,parent_element = 'canvas') {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    this.ctx = canvas.getContext("2d");
    const element = document.querySelector(parent_element)
    element.appendChild(canvas);
  }
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
}
