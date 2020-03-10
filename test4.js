let y = 0;
let rate = 1;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent(document.getElementById('lineStudyOne'));
    background(200);
    frameRate(60);
}

function draw() {
    background(200);

    let x = 200 - y;
    y == 200 ? y = 200 : y += rate;

    // line 1
    line(200, 2000, y, y)

    // line 2
    line(200, 200, x, y);

    // line 3
    line(200, 200, y, 200);

    // line 4
    line(200, 200, 200, y);

}