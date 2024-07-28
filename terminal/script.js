tm = document.getElementById('terminal');
console = document.getElementById('console');
let pos = console.value.length;
let typing = 0;
let left = 0;
console.addEventListener("keydown",(k)=>{
    if(k.key == 'Enter'){
        k.preventDefault();
        let newtext = console.value.substr(pos,);
        if(newtext.length != 0){
            p = process(newtext);
            pos += newtext.length+p.length+13;
            console.value += '\n'+p+'\nConsole:~$ ';
        }
    }
    if(k.ctrlKey && k.key == 'Backspace'){
        k.preventDefault();
    }
    if(k.key == 'Backspace' || k.key == 'Delete'){
        if(pos >= console.value.length){
            k.preventDefault();
        }
    }
    if(k.key == 'ArrowUp' || k.key == 'ArrowDown' || k.key == 'ArrowRight' || k.key == 'ArrowLeft'){
        if(console.selectionEnd <= 3){
            console.selectionEnd = 3;
        }
    }
});

function terminalClose(){
    tm.style.display  = "none";
    clear();
}

function terminalOpen(){
    tm.style.display = "block";
}