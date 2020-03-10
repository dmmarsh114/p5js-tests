let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'lightgreen', 'darkred', 'crimson'];
let toggle = true;

let b = 0;
let l = 0.05;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent(document.getElementById('artContainer'));
    background(200);
    frameRate(60);
}

function draw() {

    let randColor = Math.floor(random(0, colors.length));
    // fill(color(colors[randColor]));
    stroke(colors[randColor]);
    strokeWeight(3);

    b += 0.05;
    l += 0.05;

    let x = noise(b) * width;
    let y = noise(l) * height;

    // line(width / 2, height / 2, x, y);

    // line(b, 0, l, height);

    // line(width / 2, height / 2, random(0, 400), random(0, 400));

    // line(x, 0, y, height);

    let a = random(width);
    let c = random(height);

    // line(width / 2, height / 2, a, c);

    // ellipse(x, y, 4, 4);
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