let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");


let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");


let playerx = 250;
let playery = 250;
let playerspeed = 2;
let playerxdir = 0;
let playerydir = 0;
let playerheight = 15;
let playerwidth = 15;
xPositions = [225, 145, 225, 225, 100, 285, 225, 325, 385, 335, 85, 355, 145, 85, 85, 445, 165, 165]
yPositions = [225, 225, 165, 165, 285, 285, 345, 165, 125, 285, 420, 285, 350, 125, 50, 50, 105, 125]
widths = [20, 200, 20, 60, 200, 20, 80, 20, 20, 20, 360, 40, 20, 20, 360, 20, 240, 20]
heights = [60, 20, 60, 20, 20, 60, 20, 80, 300, 100, 20, 20, 70, 300, 20, 390, 20, 60]


function DrawAllWalls() {
    for (let i = 0; i < xPositions.length; i++) {
        ctx.fillRect(xPositions[i], yPositions[i], widths[i], heights[i]);
    }
}

function CollisionWalls() {
    for (let i = 0; i < xPositions.length; i++) {
        if (playerx + playerwidth >= xPositions[i] && playerx <= xPositions[i] + widths[i]) {
            if (playery + playerheight >= yPositions[i] && playery <= yPositions[i] + heights[i]) {
                console.log("collision with block:" + i);
                playerx = 250;
                playery = 250;
            }
        }
    }
}


function drawPlayer() {
    ctx.fillRect(playerx, playery, playerheight, playerwidth)
}

function movePlayer() {
    playerx += (playerspeed * playerxdir);
    playery += (playerspeed * playerydir);
}

function collision() {
    if (playerx < 75) {
        playerx = 250;
        playery = 250;
        alert("You've beaten the maze!!!")
    } else if (playerx > 500 - playerheight) {
        playerx = 500 - playerheight;
        playery = 250;
        playerx = 250;
        alert("You've beaten the maze!!!")
    }
    if (playery > 500 - playerwidth) {
        playery = 500 - playerwidth
        playery = 250;
        playerx = 250;
        alert("You've beaten the maze!!!")
    } else if (playery < 0) {
        playery = 250;
        playerx = 250;
        alert("You've beaten the maze!!!")
    }

}


function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    collision();
    DrawAllWalls();
    CollisionWalls();
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

setInterval(refreshUI, 30);