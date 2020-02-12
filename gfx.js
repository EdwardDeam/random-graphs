export default class GFX {
  constructor(width, height, parent_element = 'canvas') {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    this.ctx = canvas.getContext('2d');
    const element = document.querySelector(parent_element)
    element.appendChild(canvas);
  }
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
  setFont(font, size, align = 'center', baseline = 'middle') {
    this.ctx.font = `${size}px ${font}`;
    this.ctx.textAlign = align;
    this.ctx.textBaseline = baseline;
  }
  drawCircle(originX, originY, radius, text = '', color = 'black') {
    this.ctx.strokeStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(originX, originY, radius, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.fillText(text, originX, originY);
  }
  drawLine(originX, originY, destinationX, destinationY, offset = 0, color = 'black') {
    const lineData = this.calculateLine(originX, originY, destinationX, destinationY, offset);
    this.ctx.strokeStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(lineData.origin.x, lineData.origin.y);
    this.ctx.lineTo(lineData.dest.x, lineData.dest.y);
    this.ctx.stroke();
  }


  // Internal Functions

  // Calculates the distance destination of the line considering the circles.
  // Assumes (x1,y1) is closer to the center (0,0)
  calculateLine(x1, y1, x2, y2, radius) {
    const result = { origin: {}, dest: {} };
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const totalLength = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    const offsetRatio = radius / totalLength;

    result.origin['x'] = x1 + deltaX * offsetRatio;
    result.origin['y'] = y1 + deltaY * offsetRatio;
    result.dest['x'] = x2 - deltaX * offsetRatio;
    result.dest['y'] = y2 - deltaY * offsetRatio;
    return result;
  }
}
