function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent(document.getElementById('artContainer'));
    background(200);
}

function draw() {

    rotate(PI, 3);
    ellipse(width / 2, height / 2, 20, 60);
}