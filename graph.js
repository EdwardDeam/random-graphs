import GFX from './gfx.js'
// Constants
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 480;
const CANVAS_ELEMENT = "#canvas-container";

// Wraps calls to canvas.
// There should only ever be one gfx instance!
const gfx = new GFX(CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_ELEMENT);

gfx.clear();