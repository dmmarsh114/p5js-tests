let x = 200;
let y = 200;

let a = 200;
let rate = 1;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent(document.getElementById('artContainer'));
    background(200);
}

function draw() {
    background(200);

    y -= rate;
    a += rate;

    // line 1
    line(200, 200, 200, y)

    // line 2
    line(200, 200, a, 200);

    // line 3
    line(200, 200, 200, a);

    // line 4
    line(200, 200, y, 200);

    // line 5
    line(200, 200, y, y);

    // line 6
    line(200, 200, a, a);

    // line 7
    line(200, 200, y, a);

    // line 8
    line(200, 200, a, y);

}