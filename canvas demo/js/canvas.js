//console.log("hi")

//count 1-10
for (let counter = 1; counter <= 10; counter++) {
    console.log(counter);

}


//count 10-1
for (let counter = 10; counter >= 1; counter--) {
    console.log(counter);
}
//count 1-10 only odd numbers
for (let counter = 1; counter <= 10; counter += 2) {
    console.log(counter);
}

//get canvas element
let myCanvas = document.getElementById("carrying-hiser");
//create canvas object
let ctx = myCanvas.getContext("2d");
//draw rect
ctx.fillStyle = "Chartreuse";
ctx.fillRect(0, 0, 200, 100);

//draw lines
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 0);
ctx.lineTo(0, 100);
ctx.stroke();

//draw circle
ctx.beginPath();
ctx.arc(100, 50, 25, 0, 2 * Math.PI);
ctx.strokeStyle = "Red";
ctx.stroke();

//using a for loop, draw a bullseye
for (let radius = 20; radius <= 20; radius -= 5) {
    ctx.beginPath();
    ctx.arc(100, 50, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "Red";
    ctx.stroke();
}