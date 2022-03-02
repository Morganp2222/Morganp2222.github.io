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

function drawPlayer() {
    ctx.fillRect(playerx, playery, playerheight, playerwidth)
}

function movePlayer() {
    playerx += (playerspeed * playerxdir);
    playery += (playerspeed * playerydir);
}

function collision() {
    if (playerx < 0) {
        playerx = 15;
    } else if (playerx > 500 - playerheight) {
        playerx = 500 - playerheight;
    }
    if (playery > 500 - playerwidth) {
        playery = 500 - playerwidth
    } else if (playery < 0) {
        playery = 15
    }
}



function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    drawMaze();
    collision();
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

function drawMaze() {
    ctx.fillStyle = "red";
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