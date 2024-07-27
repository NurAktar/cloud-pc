// icon select
var selected_id ="";
function clicked_icon_field(){
    if(selected_id != ""){
        document.getElementById(selected_id).style.backgroundColor = "transparent";
        selected_id = "";
    }
}
function clicked_icon(e){
    id = e.id;
    document.getElementById(id).style.backgroundColor="#ffffff5b";
    selected_id = id;
}
function icon_text(e){
    id = e.id;
    // alert(id)
    document.getElementById(id).ariaDisabled='True';
    // alert("clicked");
    setTimeout(function run(){
        document.getElementById(id).disabled="false";
    },1000);
    
}
function enter(event){
    if(event.keyCode === 13){
        id=event.target.id;
        document.getElementById(id).blur();
    }
    if(event.keyCode === 113){
        alert("f2");
    }
}
document.addEventListener("dblclick",function(e){e.preventDefault()})

// context-menu
const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("body");

scope.addEventListener("contextmenu",(e) => {
    e.preventDefault();
    const {clientX: mouseX,clientY: mouseY} = e;
    contextMenu.style.left = `${mouseX}px`;
    contextMenu.style.top = `${mouseY}px`;
    if(window.innerWidth - mouseX < contextMenu.offsetWidth){
        contextMenu.style.left = `${window.innerWidth-contextMenu.offsetWidth-10}px`;
    }
    if(window.innerHeight - mouseY < contextMenu.offsetHeight + 30){
        contextMenu.style.top = `${window.innerHeight-contextMenu.offsetHeight-40}px`;
    }
    
    setTimeout(() => {
        contextMenu.classList.add("visible");
    });
    scope.addEventListener("click",(e)=>{
        if(e.target.offsetParent != contextMenu){
            contextMenu.classList.remove("visible");
        }
    });
});
//window close fun
function closetask(classid){
    document.getElementsByClassName(classid)[0].classList.remove("visible");
}

//change background
document.getElementById("cbg").addEventListener("click",()=>{
    contextMenu.classList.remove("visible");
    cbg = document.getElementsByClassName("cbg_box window_box")[0];
    setTimeout(() => {
        cbg.classList.add("visible");
    });
});

function set_wallpaper(e){
    document.body.style="background-image:url('"+e.getAttribute('data-img')+"');"
}