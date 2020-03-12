let interval = 20;

let player = {
    x: 200,
    y: 200
}

let fruit = {
    x: 200,
    y: 0,
    'eaten': false
}

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent(document.getElementById('artContainer'));

}

function draw() {

    background(200);

    // vertical lines
    for (let i = 0; i < width; i += interval) {
        line(i, 0, i, height);
    }

    // horizontal lines
    for (let i = 0; i < height; i += interval) {
        line(0, i, width, i);
    }

    fill('red');
    ellipseMode(CORNER);
    ellipse(fruit.x, fruit.y, interval, interval);

    if (fruit.eaten == false) {
        fruit.y += 2;
        if (fruit.y > height) { fruit.y = 0 }

        if (fruit.x == player.x && fruit.y == player.y) {
            console.log('Yummy!');
            fruit.eaten = true;
        }
    }

    fill('green');
    square(player.x, player.y, interval);

}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        player.x += interval;
        if (player.x > width) { player.x = 0 }
    }
    if (keyCode === LEFT_ARROW) {
        player.x -= interval;
        if (player.x < 0) { player.x = width }
    }

    if (keyCode === UP_ARROW) {
        player.y -= interval;
        if (player.y < 0) { player.y = height }
    }
    if (keyCode === DOWN_ARROW) {
        player.y += interval;
        if (player.y > height) { player.y = 0 }
    }
}