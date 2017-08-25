var backgroundVideo;
var soundPlayer;
var borderPadding = 16;

// Text stuff
var font
var opacity = 0;
var fadingIn = true;
var textIndex = 0;
var fontSize = 48;
var fadeInSpeed = 0.9;
var fadeOutSpeed = 5.90;
var textPosX, textPosY;
var textStrings = ["First, tell me what you're struggling with.", "(Be specific, 3 sentences max!)",
    "Now, what's your most negative take on this?", "What is the darkest thought you have about this? What goes through your mind?", "(1 sentence max, please)", "Nice!", "Ready to send this?", "Reply or tap below for help.", "OK, first describe a situation that's bothering you."
]


function preload() {
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

  // Load font
    font = loadFont('assets/Aspire-DemiBold.ttf');
}

function setup() {
    createCanvas(window.innerWidth - borderPadding, window.innerHeight - borderPadding);
    background(130, 50, 70);
    // specify multiple formats for different browsers
    backgroundVideo = createVideo(['assets/videos/video_bg_320x180.mp4' /*, 'assets/video_bg.mov'*/ ]);
    backgroundVideo.hide();
    backgroundVideo.loop();

    // Set window title
    document.title = " D E E P   C A R E ";

    // Init text position
    textPosX = width / 2;
    textPosY = height / 2;
}

function draw() {
    image(backgroundVideo, 0, 0, width, height); // draw the video frame to canvas

    // Draw text
    fill(255,opacity);
    textFont(font, fontSize);
    text(textStrings[textIndex], textPosX, textPosY);

    // Update text
    updateText();
}

function updateText() {

    if (fadingIn) {
        opacity += fadeInSpeed;

        if (opacity > 230) {
            fadingIn = false;
        }
    } else {
        opacity -= fadeOutSpeed;;
    }

    if (opacity < 5 && !fadingIn) {
        // Set to fade in again
        fadingIn = true;

        // Get next text
        if (textIndex >= textStrings.length - 1) {
            textIndex = 1;
        } else {
            textIndex++;
        }

        // Position
        textSize(fontSize);
        textPosX = Math.floor((Math.random() * (width-textWidth(textStrings[textIndex])) ) + 1);;
        textPosY = Math.floor((Math.random() * (height-60)) + 60);
    }

}

function windowResized() {
    resizeCanvas(windowWidth - borderPadding, windowHeight - borderPadding);
}
