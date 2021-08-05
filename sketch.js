var x;
var y;
var pts = [];

var axisSize = 4;
var scl;

var choose = 0;

function setup() {
  createCanvas(500, 500);
  scl = width / (2 * axisSize);
}

function draw() {
  background(20);
  var index = 0

  //Axes
  push();
  stroke(50);
  line(0, height / 2, width, height / 2);
  line(width / 2, 0, width / 2, height);
  pop();

  //Points
  for (let i = -axisSize; i <= axisSize; i += 0.1) {
    x = i;

    switch (choose) {
      case 0:
        y = -(pow(x, 1));
        break;
      case 1:
        y = -(pow(x, 2) - 2);
        break;
      case 2:
        y = -(pow(x, 3) - 3 * pow(x, 1));
        break;
      case 3:
        y = -(pow(x, 4) - 4 * pow(x, 2) + 2);
        break;
      case 4:
        y = -(pow(x, 5) - 5 * pow(x, 3) + 5 * pow(x, 1));
        break;
      case 5:
        y = -(pow(x, 6) - 6 * pow(x, 4) + 9 * pow(x, 2) - 2);
        break;
      case 6:
        y = -(pow(x, 7) - 7 * pow(x, 5) + 14 * pow(x, 3) - 7 * pow(x, 1));
        break;
      case 7:
        y = -(pow(x, 8) - 8 * pow(x, 6) + 20 * pow(x, 4) - 16 * pow(x, 2) + 2);
        break;
      case 8:
        y = -(pow(x, 9) - 9 * pow(x, 7) + 27 * pow(x, 5) - 30 * pow(x, 3) + 9 * pow(x, 1));
        break;
      case 9:
        y = -(pow(x, 10) - 10 * pow(x, 8) + 35 * pow(x, 6) - 50 * pow(x, 4) + 25 * pow(x, 2) - 2);
        break;
    }

    push();
    translate(width / 2, height / 2);
    noStroke();

    let pt = createVector(x * scl, y * scl);
    point(pt.x, pt.y);

    pts[index++] = pt;

    pop();
  }

  //Line
  push();
  noFill();
  stroke(220);
  strokeWeight(2)
  translate(width / 2, height / 2)
  beginShape();
  for (let i = 0; i < pts.length; i++) {
    curveVertex(pts[i].x, pts[i].y)
  }
  endShape();
  pop();

  //Degree
  fill(220);
  textSize(13);
  text('Degree: ' + (choose + 1), width - 70, height - 10);
}

function mousePressed() {
  choose++;
  choose %= 10;
}