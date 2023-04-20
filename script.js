var backButton

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("green")
  backButton = createButton("Back");
  backButton.position(350,350)
  backButton.mousePressed(clickedBack);
}

function clickedBack(){
    window.open("https://NewPageswithNewFile1.aycatuzmen.repl.co", "_self");
}
