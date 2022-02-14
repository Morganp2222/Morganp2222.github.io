//get canvas item

let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

//get paragraph items
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");

//player position and movement
let playerx = 250;
let playery = 250;
let playerspeed = 2;
let playerxdir = 0;
let playerydir = 0;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;
//balls
let ballx = 100;
let bally = 100;
let ballxdir = 1.5;
let ballydir = 2;
const BALL_RADIUS = 15;


function drawPlayer() {
    ctx.fillRect(playerx, playery, 100, 25);
    ctx.fillStyle = "Purple";
}

function movePlayer() {
    playerx += (playerspeed * playerxdir);
    playery += (playerspeed * playerydir);

    //edge check
    if (playerx < 0) {
        playerx = 0;
    } else if (playerx > 500 - 100) {
        playerx = 500 - 100;
    }
    if (playery > 475) {
        playery = 475
    } else if (playery < 0) {
        playery = 0
    }
}

function drawBall() {
    // draw a filled circle at ballx and bally
    ctx.beginPath();
    ctx.arc(ballx, bally, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
}

function moveBall() {
    bally += ballydir;
    ballx += ballxdir;
}

function ballcollision() {
    //vert walls
    if ((bally > 500 - BALL_RADIUS) || (bally < 0 + BALL_RADIUS)) {
        ballydir = ballydir * -1;
    }
    if ((ballx > 500 - BALL_RADIUS) || (ballx < 0 + BALL_RADIUS)) {
        ballxdir = ballxdir * -1;
    }

    //check if paddle is hit
    if (ballx + BALL_RADIUS >= playerx && ballx - BALL_RADIUS <= playerx + PADDLE_WIDTH && bally + BALL_RADIUS >= playery && bally - BALL_RADIUS <= playery + PADDLE_HEIGHT) {
        ballydir = ballydir * -1.01;

    }
}


function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    //animate ball
    ballcollision();
    moveBall();
    drawBall();
}

//when key is pressed

function keyPressed(event) {
    //get the actual key pressed
    let key = event.keyCode;
    keydownOutput.innerHTML = "key down code:" + key;
    if (key === 37) {
        playerxdir = -1;
    } else if (key === 39) {
        playerxdir = 1;
    }
    if (key === 38) {
        playerydir = -1;
    } else if (key === 40) {
        playerydir = 1;
    }
}

//when key is released 

function keyReleased(event) {
    let key = event.keyCode
    keyupOutput.innerHTML = "key up code" + key;

    if (key === 37) {
        playerxdir = 0;
    } else if (key === 39) {
        playerxdir = 0;
    }
    if (key === 40) {
        playerydir = 0;
    } else if (key === 38) {
        playerydir = 0;
    }

}

// object position
let xPosition = 0;
let yPosition = 0;
let xDirection = 2;
//rect hor
function moveHor() {
    //clear screen
    ctx.clearRect(0, 0, 500, 500);
    //draw rect at current position
    ctx.fillRect(xPosition, 0, 50, 50, );
    ctx.fillStyle = "red";
    //move the x position over by x pixels
    xPosition += 1;
    //did i hit the wall? if so wrap around
    if (xPosition >= 500) {
        xPosition = 0;
    }
}

//rect moving vertically then wrapping around


function moveVertical() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(0, yPosition, 50, 50);
    yPosition += 1;
    if (yPosition >= 500) {
        yPosition = 0
    }
}


//rect bouncing horizontally

function bounceHor() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(xPosition, 0, 50, 50, );
    ctx.fillStyle = "purple";
    xPosition = xPosition + xDirection;
    if (xPosition > 500 | xPosition < 0) {
        xDirection = -xDirection;
    }
}





//setInterval(b 10);
setInterval(refreshUI, 30);