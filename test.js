let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'lightgreen', 'darkred', 'crimson'];
let i = 0;
let toggle = true;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent(document.getElementById('artContainer'));
    background(200);
    frameRate(10);
}

function draw() {

    let randColor = Math.floor(random(0, colors.length));
    fill(color(colors[randColor]));
    stroke(colors[randColor]);
    strokeWeight(3);

    let x = (random(0, width));
    let y = (random(0, height));

    line(width / 2, height / 2, x, y);

    ellipse(x, y, 40, 40);
}

function mousePressed() {
    if (toggle) {
        noLoop();
        toggle = !toggle;
    } else {
        loop();
        toggle = !toggle;
    }
}