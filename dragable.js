// Make the DIV element draggable:
dragElement(document.getElementById("window_box"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e;
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





// Make the icon element draggable:
function dragIcon(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0,eposX = 0, eposY = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e;
    e.preventDefault();
    // get the mouse cursor position at startup:
    eposX = elmnt.offsetLeft;
    eposY = elmnt.offsetTop;
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e;
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

  function closeDragElement(e) {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    //fit icon to grid area
    console.log(Math.floor((elmnt.offsetLeft-pos1)/80));
    console.log(Math.floor((elmnt.offsetTop - pos2)/70));
    elmnt.style.top = Math.floor((e.clientY)/70)*70 + "px";
    elmnt.style.left = Math.floor((e.clientX)/80)*80 + "px";
    //testing
    //elmnt.style.top = (eposY) + "px";
    //elmnt.style.left = (eposX) + "px";
  }
}

const iconNumber = document.getElementsByClassName("icon-container").length;
let column = Math.ceil(iconNumber/(Math.floor((document.body.scrollHeight-30)/70)));
let row = Math.floor((document.body.scrollHeight-30)/70);
console.log(column);
console.log(row);
let temp = 0;
for (let c = 0; c < column; c++) {
  for (let i = 1; i <= row; i++) {
    if(i==1){
      document.getElementById("f"+(i+temp)).style.top = 4+"px";
    }
    else{
      document.getElementById("f"+(i+temp)).style.top = 70*(i-1)+"px";
    }
    document.getElementById("f"+(i+temp)).style.left = 80*c+"px";
  }
  temp = temp + row;
}