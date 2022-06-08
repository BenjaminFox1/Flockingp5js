// Experimenting with with vectors to chase the mouseX and MouseY

let v1,a;

function setup() {

  createCanvas(500, 500);

  background(150);
  v1 = createVector(50,50);
  v2 = createVector(200,50);
  v3 = createVector(350,50);
  v4 = createVector(400,50);

  v5 = createVector(50,350);
  v6 = createVector(200,450);
  v7 = createVector(350,500);
  v8 = createVector(400,300);
}

function draw() {

  background(170)

  noStroke();
  fill(255,0,0);
  ellipse(v1.x,v1.y,50);
  fill(255,255,0);
  ellipse(v2.x,v2.y,75);
  fill(0,255,0);
  ellipse(v3.x,v3.y,100);
  fill(0,0,255);
  ellipse(v4.x,v4.y,55);

  fill(255,150,0);
  ellipse(v5.x,v5.y,50);
  fill(255,255,100);
  ellipse(v6.x,v6.y,75);
  fill(0,150,0);
  ellipse(v7.x,v7.y,100);
  fill(75,100,255);
  ellipse(v8.x,v8.y,55);

  v1.x=v1.x+(mouseX-v1.x)/50;
  v1.y=v1.y+(mouseY-v1.y)/50;

  v2.x=v2.x+(mouseX-v2.x)/150;
  v2.y=v2.y+(mouseY-v2.y)/150;

  v3.x=v3.x+(mouseX-v3.x)/375;
  v3.y=v3.y+(mouseY-v3.y)/375;

  v4.x=v4.x+(mouseX-v4.x)/120;
  v4.y=v4.y+(mouseY-v4.y)/120;

  v5.x=v5.x+(mouseX-v5.x)/70;
  v5.y=v5.y+(mouseY-v5.y)/70;

  v6.x=v6.x+(mouseX-v6.x)/360;
  v6.y=v6.y+(mouseY-v6.y)/360;

  v7.x=v7.x+(mouseX-v7.x)/275;
  v7.y=v7.y+(mouseY-v7.y)/275;

  v8.x=v8.x+(mouseX-v8.x)/420;
  v8.y=v8.y+(mouseY-v8.y)/420;


}

function mousePressed () {

  v1.x=random(400)
  v1.y=random(400)

  v2.x=random(400)
  v2.y=random(400)

  v3.x=random(400)
  v3.y=random(400)

  v4.x=random(400)
  v4.y=random(400)

  v1.x=random(400)
  v1.y=random(400)

}
