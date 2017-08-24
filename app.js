var fingers;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // specify multiple formats for different browsers
  fingers = createVideo(['assets/video_bg.mp4'/*, 'assets/video_bg.mov'*/]);
  fingers.hide();
  fingers.loop();
}

function draw() {
  image(fingers, 0, 0, width, height); // draw the video frame to canvas
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
