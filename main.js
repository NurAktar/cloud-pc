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
    document.getElementById(id).ariaDisabled='True';
    // alert("clicked");
    setTimeout(function run(){
        document.getElementById(id).disabled="false";
    },1000);
    
}

function enter(event){
    if(event.keyCode === 13){
        id=event.target.id;
        console.log(id);
        document.getElementById(renameid).lastElementChild.blur();
    }
    if(event.keyCode === 113){
        alert("f2");
    }
}
document.addEventListener("dblclick",function(e){e.preventDefault()});


// //contextmenu for folders.
// const folderMenu = document.getElementById("folder-menu");
// const folders = document.querySelectorAll(".icon-container");
// folders.forEach((folder) =>{
//     folder.addEventListener("contextmenu",(e) =>{
//         e.preventDefault();
//         const {clientX: mouseX,clientY: mouseY} = e;
//         folderMenu.style.left = `${mouseX}px`;
//         folderMenu.style.top = `${mouseY}px`;
//         if(window.innerWidth - mouseX < folderMenu.offsetWidth){
//             folderMenu.style.left = `${window.innerWidth-folderMenu.offsetWidth-10}px`;
//         }
//         if(window.innerHeight - mouseY < folderMenu.offsetHeight + 30){
//             folderMenu.style.top = `${window.innerHeight-folderMenu.offsetHeight-40}px`;
//         }
        
//         setTimeout(() => {
//             folderMenu.classList.add("visible");
//         });
//         scope.addEventListener("click",(e)=>{
//             if(e.target.offsetParent != folderMenu){
//                 folderMenu.classList.remove("visible");
//             }
//         });
//     });
// });
// // context-menu
// const contextMenu = document.getElementById("context-menu");
// const scope = document.querySelector("body");

// scope.addEventListener("contextmenu",(e) => {
//     e.preventDefault();
//     const {clientX: mouseX,clientY: mouseY} = e;
//     contextMenu.style.left = `${mouseX}px`;
//     contextMenu.style.top = `${mouseY}px`;
//     if(window.innerWidth - mouseX < contextMenu.offsetWidth){
//         contextMenu.style.left = `${window.innerWidth-contextMenu.offsetWidth-10}px`;
//     }
//     if(window.innerHeight - mouseY < contextMenu.offsetHeight + 30){
//         contextMenu.style.top = `${window.innerHeight-contextMenu.offsetHeight-40}px`;
//     }
    
//     setTimeout(() => {
//         contextMenu.classList.add("visible");
//     });
//     scope.addEventListener("click",(e)=>{
//         if(e.target.offsetParent != contextMenu){
//             contextMenu.classList.remove("visible");
//         }
//     });
// });



function contextHandler(e){
    if(e.target.id == "icon-field"){
        contextfun(e);
    }
}
//contextmenu for folders.
let renameid = "";
const folderMenu = document.getElementById("folder-menu");
const scope = document.querySelector("body");
function folderfun(e){
    let id = "";
    if(e.target.id == "" || e.target.id == "icon_text")
        id = e.target.offsetParent.id;
    else {
        id = e.target.id;
    }
    renameid = id;
    e.preventDefault();
    const {clientX: mouseX,clientY: mouseY} = e;
    folderMenu.style.left = `${mouseX}px`;
    folderMenu.style.top = `${mouseY}px`;
    if(window.innerWidth - mouseX < folderMenu.offsetWidth){
        folderMenu.style.left = `${window.innerWidth-folderMenu.offsetWidth-10}px`;
    }
    if(window.innerHeight - mouseY < folderMenu.offsetHeight + 30){
        folderMenu.style.top = `${window.innerHeight-folderMenu.offsetHeight-40}px`;
    }
    
    setTimeout(() => {
        folderMenu.classList.add("visible");
    });
    scope.addEventListener("click",(e)=>{
        if(e.target.offsetParent != folderMenu){
            folderMenu.classList.remove("visible");
        }
    });
};

// context-menu
const contextMenu = document.getElementById("context-menu");
function contextfun(e){
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
};
function rename(){
    let input = document.getElementById(renameid).lastElementChild;
    input.focus();
    input.select();
    folderMenu.classList.remove("visible");
}

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