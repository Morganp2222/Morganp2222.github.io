let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");


let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");


let playerx = 250;
let playery = 250;
let playerspeed = 2;
let playerxdir = 0;
let playerydir = 0;

function drawPlayer() {
    ctx.fillRect(playerx, playery, 25, 25);
    ctx.fillStyle = "Purple";
}

function movePlayer() {
    playerx += (playerspeed * playerxdir);
    playery += (playerspeed * playerydir);
}

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

function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    drawMaze();
}

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

function drawMaze() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(225, 225, 20, 60);
    ctx.fillRect(145, 225, 200, 20);
    ctx.fillRect(225, 165, 20, 60);
    ctx.fillRect(225, 165, 60, 20);
    ctx.fillRect(100, 285, 200, 20);
    ctx.fillRect(285, 285, 20, 60);
    ctx.fillRect(225, 345, 80, 20);
    ctx.fillRect(325, 165, 20, 80);
    ctx.fillRect(385, 125, 20, 300);
    ctx.fillRect(335, 285, 20, 100);
    ctx.fillRect(85, 420, 360, 20);
    ctx.fillRect(355, 285, 40, 20);
    ctx.fillRect(145, 350, 20, 70);
    ctx.fillRect(85, 125, 20, 300);
    ctx.fillRect(85, 50, 360, 20);
    ctx.fillRect(445, 50, 20, 390);
    ctx.fillRect(165, 105, 240, 20);
    ctx.fillRect(165, 125, 20, 60);
}




//setInterval(b 10);
setInterval(refreshUI, 30);