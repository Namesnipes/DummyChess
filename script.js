//code

function createPiece(pieceName,x,y){
  var img = new Image()
  img.src = "assets/" + pieceName + ".png"
  img.setAttribute("width","50")
  img.setAttribute("height","50")
  var pixelsLeft = x * 50
  var pixelsDown = y * 50
  img.style.position = "absolute";
  img.style.left = pixelsLeft + "px";
  img.style.top = pixelsDown + "px"
  img.style.cursor = "grab";
  document.getElementById('chessBoard').appendChild(img);
  img.addEventListener('dragstart',dragStart)
  elmnt = img;
  //dragElement(img)
}

var startX = 0
var startY = 0
var finalX= 0
var finalY = 0
var elmnt;

document.addEventListener('dragover',function(e){
  e.preventDefault();
})
document.addEventListener('drop',onDrop)

function dragStart(e){
  console.log('dragging')

  elmnt = e.target
  startX = e.clientX
  startY = e.clientY
}

function onDrop(e){
  e.preventDefault()
  console.log('dropped')

  finalX = e.clientX
  finalY = e.clientY

  var x = finalX - startX
  var y = finalY - startY

  elmnt.style.top = (elmnt.offsetTop + y) + "px";
  elmnt.style.left = (elmnt.offsetLeft + x) + "px";
}



/*
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /// otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    console.log('ok ')
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    console.log('ok')
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
*/
//idk how to work git desktop
// me neither lmfao?


for(var i = 0; i<8; i++){
  createPiece("pawn",i,1)
}
