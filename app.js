var backgroundVideo;
var soundPlayer

function setup() {
  createCanvas(window.innerWidth+15, window.innerHeight+15);
  // specify multiple formats for different browsers
  backgroundVideo = createVideo(['assets/video_bg.mp4' /*, 'assets/video_bg.mov'*/ ]);
  backgroundVideo.hide();
  backgroundVideo.loop();


  // Add logo to top-left corner
  var logo;
  logo = document.createElement('img');
  logo.className = "logo";
  logo.alt = 'Anyines_logo';
  logo.style.opacity = '1.0';
  logo.onclick = function() {
    window.open('http://tollund.cc');
  };
  logo.src = "assets/LOGO_silver.png";
  // logo.src = "assets/anyines_logo.svg";
  document.body.appendChild(logo);

  // Set window title
  document.title = " D E E P   C A R E ";


}

function draw() {
  image(backgroundVideo, 0, 0, width, height); // draw the video frame to canvas
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
