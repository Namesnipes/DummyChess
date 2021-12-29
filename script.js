//code

function createPiece(pieceName,x,y){
  var img = new Image()
  img.src = "assets/" + pieceName + ".png"
  img.setAttribute("width","39")
  img.setAttribute("height","63")
  var leftMargin = 8
  var topMargin = 8
  var pixelsLeft = leftMargin + ((63.5-39)/2) + (x * 63.5) // i hate this someone please tell me how to scale this correctly
  var pixelsDown = topMargin + y * 63.5
  img.style.position = "absolute";
  img.style.left = pixelsLeft + "px";
  img.style.top = pixelsDown + "px"
  img.style.cursor = "grab";
  img.style['touch-action'] = "none"
  img.style['user-select'] = "none"
  document.getElementById('chessBoard').appendChild(img);
  //img.addEventListener('dragstart',dragStart)
  dragElement(img)
}

var elmnt;

/*
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

*/



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.ontouchstart = dragMouseDown;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    elmnt = e.target
    e = e || window.event;
    e.preventDefault();
    elmnt.style.cursor = "grabbing";
    // get the mouse cursor position at startup:
    if(e.type == "touchstart"){
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
      console.log("start" + pos3 + " " + pos4)
    } else {
      pos3 = e.clientX;
      pos4 = e.clientY;
    }

    //desktop events
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;

    //mobile events
    document.ontouchend= closeDragElement;
    document.ontouchmove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    // calculate the new cursor position:
    if (e.type === "touchmove") {
      pos1 = pos3 - e.touches[0].clientX;
      pos2 = pos4 - e.touches[0].clientY;
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
    } else {
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
    }

    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.getElementById("dropPiece").play()
    elmnt.style.cursor = "grab";
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.ontouchmove  = null;
    }
}

//idk how to work git desktop
// me neither lmfao?


for(var i = 0; i<8; i++){
  createPiece("whitePawn",i,6)
}
