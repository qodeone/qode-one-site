var img;
var smallPoint, largePoint;
var canvas;

function preload() {
  img = loadImage("../img/qode-one-simplestore.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}

window.onresize = function() {
  canvas.size(windowWidth, windowHeight);
};