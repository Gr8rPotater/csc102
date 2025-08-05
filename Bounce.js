// set up variables
let moveImage;
let xPos = 100;
let yPos = 100;
let xChange = 3;
let yChange = 3;

// getting reference to the buttons and image
let startBtn;
let stopBtn;
let cat;

window.onload = function () {
  startBtn = document.getElementById("startButton");
  stopBtn = document.getElementById("stopButton");
  cat = document.getElementById("memeImage");

  stopBtn.disabled = true;

  // How the image is moving throughout
  function moveCat() {
    xPos += xChange;
    yPos += yChange;

    // Get image size
    const imgWidth = cat.offsetWidth;
    const imgHeight = cat.offsetHeight;

    // Get window size for bounce control
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    // Bounce off left/right edges or top/bottom respectively by reversing the direction
    if (xPos + imgWidth >= winWidth || xPos <= 0) {
      xChange *= -1;
    }

    if (yPos + imgHeight >= winHeight || yPos <= 0) {
      yChange *= -1;
    }

    // Updating image position constantly
    cat.style.left = xPos + "px";
    cat.style.top = yPos + "px";
  }

  // start moving
  startBtn.onclick = function () {
    startBtn.disabled = true;
    stopBtn.disabled = false;
  
    // Movement speed of the Image, lower equals faster and smoother
    moveImage = setInterval(moveCat, 10); 
  }
// Including the movement speed in the start moving is what allows you to stop the image/stop by default

  // stop moving
  stopBtn.onclick = function () {
    clearInterval(moveImage);
    stopBtn.disabled = true;
    startBtn.disabled = false;
  };
};