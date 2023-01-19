let img;
let canvas;
let video;
function preload() {
  img = loadImage('bunny.jpg');
  video = createCapture(VIDEO);
  video.hide();
}
function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(200, 250);

  // video = createCapture(VIDEO);
  // video.hide();

  image(img, 0, 0);
  tint(0, 153, 204); // Tint blue
  image(img, 100, 0);
}

function draw() {
  image(video, 0, 0);
  // tint(0, 153, 204); // Tint blue
  filter(GRAY); // Tint blue
  image(video, width/2, 0);
}
