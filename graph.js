import GFX from './gfx.js'
// Constants
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 480;
const CANVAS_ELEMENT = '#canvas-container';

const NODE_FONT = 'serif';
const NODE_FONT_SIZE = 28;
const NODE_RADIUS = 25;

// Wraps calls to canvas.
// There should only ever be one gfx instance!
const gfx = new GFX(CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_ELEMENT);

gfx.setFont(NODE_FONT, NODE_FONT_SIZE);
gfx.clear();

gfx.drawCircle(45,45,NODE_RADIUS, 'A', 'green');
gfx.drawCircle(120,120,NODE_RADIUS, 'B');

gfx.drawLine(45,45,120,120,25);