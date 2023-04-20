var backButton
var helpButton

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("green")
  backButton = createButton("Back");
  backButton.position(350,350)
  backButton.mousePressed(clickedBack);
  helpButton = createButton("Help");
  helpButton.position(150,150)
  helpButton.mousePressed(help);
  
}

function clickedBack(){
    window.open("https://NewPageswithNewFile1.aycatuzmen.repl.co", "_self");
}
function help(){
    print("click on hepl")
}