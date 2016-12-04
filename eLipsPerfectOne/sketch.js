theCirc = {
  x: 100,
  y: 250
}

theCircCol = {
  r: 255,
  g: 50,
  b: 30
}

theCol = {
  r: 255,
  g: 50,
  b: 30,
  alp: 0
}

function setup() {
  createCanvas(500, 500);
  background(255);

}

function draw() {

  //fill(theCircCol.r, 100, 135 , 100);
  noStroke();
  fill(255);
  ellipse(250, 250, 150, 150);
  var offset = 0;

  for (var x = 0; x < width; x += 20) {
    noStroke();
    fill(theCol.r, 100, 135, 100);
    rect(x, theCirc.y, 25, 25);

    theCirc.y = random(0, height);
    theCol.r = map(theCirc.x, 0, width, 60, 200);

    for (var y = 0; y < width; y += 5) {
      theCol.alp = random(50, 130);
      fill(theCircCol.r, 100, 135, theCol.alp);
      noStroke();
      rect(theCirc.x, y, 5, 5);
      theCirc.x = random(0, width);
      theCircCol.r = map(theCirc.x, width, 0, 180, 255);

    }

    //for (var i = 0; i < width; i += 20) {
      //stroke(255);
      //line(i + offset, 250, i + 10, 270);

    //}
    fill(255);
    ellipse(250, 250, 150, 150);

    offset += 10;
  }
}