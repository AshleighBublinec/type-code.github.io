function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#f588a5');
  textSize(70);
  noStroke();
  
}

function draw() {
 // erase();
  //background('#b7df9c');
 // noErase();
  textAlign(CENTER);
 // fill('#f588a5');
  textSize(130)
  textStyle (BOLD)
  text('HELLO',windowWidth/2, windowHeight/2);
  textSize(30)
  textStyle(ITALIC)
  text('Bonjour', windowWidth/5.2, windowHeight/4.6);
  text('¡Hola!', windowWidth/1.3, windowHeight/1.3);
  text('Konnichiwa', windowWidth/3.2, windowHeight/3.2);
  text('Ciao', windowWidth/1.6, windowHeight/1.6);
  text('Guten Tag', windowWidth/10, windowHeight/10);
  text('Shalom', windowWidth/1.1, windowHeight/1.1)
  fill(255);
  ellipse(mouseX, mouseY, 80, 80)
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}