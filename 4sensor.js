
// VIDEO
var fingers;

// Audio input
var mic;

function setup() {
  createCanvas(0, 0);
  fingers = createVideo('assets/video/intro.mp4');
  fingers.play();
}