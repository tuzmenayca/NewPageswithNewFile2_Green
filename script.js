var backButton
var helpButton


function setup() {
  createCanvas(400, 400);
  background("green")
  backButton = createButton("Back");
  backButton.position(350,350)
  backButton.mousePressed(clickedBack);
  helpButton = createButton("Help");
  helpButton.position(150,150)
  helpButton.mousePressed(help);
}

function draw() {

  
}

function clickedBack(){
    //window.open("https://NewPageswithNewFile1.aycatuzmen.repl.co", "_self");
//window.open("https://95dc9fa3-111d-4f01-87bc-9fa7119dca16-00-1j3oyk5cngcsm.riker.repl.co/","_self");
  //window.open("https://4c9b4082-9814-46a5-a26f-bb8c4b55b56d-00-g1bchx78csoz.worf.repl.co/","_self");
  window.open ("https://replit.com/@AycaTuzmen/NewPageswithNewFile1#script.js", "_self");
  //window.open ("https://4c9b4082-9814-46a5-a26f-bb8c4b55b56d-00-g1bchx78csoz.worf.replit.dev/", "_self");
 // window.open("https://replit.com/@pgray13/DementiaDestroyersApp", "_self");
  
}
function help(){
    print("click on help")
}