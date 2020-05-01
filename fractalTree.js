let weight = 10;
let len = 100;
let angle;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent(document.getElementById('artContainer'));

    angle = PI / 8;
}

function draw() {
    background(220);

    translate(width / 2, height);
    branch(100);

    noLoop();
}

function branch(len) {
    // if (weight > 1) {
    //     console.log(weight);
    //     weight--;
    // }
    // strokeWeight(weight);

    line(0, 0, 0, -len);
    translate(0, -len);


    if (len > 4) {

        push();
        rotate(angle);
        branch(len * 0.67);
        pop();

        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}