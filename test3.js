let y = 0;
let rate = 1;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent(document.getElementById('artContainer'));
    background(200);
    frameRate(60);
}

function draw() {
    background(200);

    let x = 400 - y;
    // y += 5;
    y == 400 ? y = 400 : y += rate;

    // line 1
    line(0, 0, y, y)

    // line 2
    line(400, 0, x, y);

    // line 3
    line(0, 200, y, 200);

    // line 4
    line(200, 0, 200, y);

}