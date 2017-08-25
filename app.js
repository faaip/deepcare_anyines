var backgroundVideo;
var soundPlayer;
var borderPadding = 16;

function setup() {
  createCanvas(window.innerWidth-borderPadding, window.innerHeight-borderPadding);
  background(130, 50, 70);
  // specify multiple formats for different browsers
  backgroundVideo = createVideo(['assets/videos/video_bg_640x360.mp4' /*, 'assets/video_bg.mov'*/ ]);
  backgroundVideo.hide();
  backgroundVideo.loop();

  // Add logo to top-left corner
  var logo;
  logo = document.createElement('img');
  logo.className = "logo";
  logo.alt = 'Anyines_logo';
  logo.style.opacity = '1.0';
  logo.onclick = function() {
    window.open('https://anyines.bandcamp.com');
  };
  logo.src = "assets/LOGO_silver.png";
  // logo.src = "assets/anyines_logo.svg";
  document.body.appendChild(logo);

  // Set window title
  document.title = " D E E P   C A R E ";

  // Set timed call-back from changing text
  window.setInterval(changeText,3000);
}

function draw() {
  image(backgroundVideo, 0,0, width, height); // draw the video frame to canvas
}

var drawnText;

function drawText(){
  text(drawnText,400,400);
}

function changeText(){

}

function windowResized() {
  resizeCanvas(windowWidth-borderPadding, windowHeight-borderPadding);
}
