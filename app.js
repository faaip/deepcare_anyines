var backgroundVideo;
var background_img;
var isVideoLoaded = false;

// Text stuff
var font;
var opacity = 0;
var fadingIn = true;
var textIndex = 0;
var fontSize = 20;
var fadeInSpeed = 0.9;
var fadeOutSpeed = 5.90;
var textPosX, textPosY;
var textStrings = ["First, tell me what you're struggling with.", "(Be specific, 3 sentences max!)",
    "Now, what's your most negative take on this?", "What is the darkest thought you have about this? What goes through your mind?", "(1 sentence max, please)", "Nice!", "Ready to send this?", "Reply or tap below for help.", "OK, first describe a situation that's bothering you."
]

function preload() {

    if (!isTouchDevice()) {
        // load soundcloud player
        var iframe = document.createElement('iframe');
        var start_track = Math.floor((Math.random() * 12) + 1);
        iframe.width = "100%"
        iframe.height = "100";
        iframe.id = "hideframe"
        // iframe.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/331768602%3Fsecret_token%3Ds-d27yO&amp;color=ff5500&amp;auto_play=true&amp;start_track=" + start_track + "&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true;"
        iframe.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/339737358%3Fsecret_token%3Ds-AQv2I&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
        document.body.appendChild(iframe);
    } else {
        alert('touch device')
    }
    // Load font
    font = loadFont('assets/BodoniFLF-Italic.ttf');

    // Load image
    background_img = loadImage("assets/background_image.jpg");

}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    // Set window title
    document.title = " D E E P   C A R E ";

    // LOGO_silver
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
    document.body.appendChild(logo);

    // Init text position
    textPosX = width / 2;
    textPosY = height / 2;
    // specify multiple formats for different browsers
    backgroundVideo = createVideo(['assets/videos/IMG_320x240.mp4' /*, 'assets/video_bg.mov'*/ ], videoLoaded);
    backgroundVideo.hide();
    backgroundVideo.loop();
}

function videoLoaded(){
  isVideoLoaded = true;
}

function draw() {
    if(isVideoLoaded){
      image(backgroundVideo, 0, 0, width, height); // draw the video frame to canvas
    }else{
      fill(255);
      image(background_img, 0, 0, width, height);
    }

    // Draw text
    fill(255, opacity);
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

    if (opacity < -1400 && !fadingIn) {
        // Set to fade in again
        fadingIn = true;
        opacity = 0;

        // Get next text
        if (textIndex >= textStrings.length - 1) {
            textIndex = 1;
        } else {
            textIndex++;
        }

        // Position
        textSize(fontSize);
        textPosX = Math.floor((Math.random() * (width - textWidth(textStrings[textIndex]))) + 1);;
        textPosY = Math.floor((Math.random() * (height - 60)) + 60);
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseReleased() {
    window.open('https://anyines.bandcamp.com');
}

function deviceShaken() {
    window.open('https://anyines.bandcamp.com');
}

function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}
