function clear(){
    let cli = document.getElementById("console");
    cli.value = "Console:~$ ";
    pos = console.value.length;
    typing = 0;left = 0;
}
function process(keyword){
    if(keyword == 'hi'){
        return 'hi nur';
    }
    else if (keyword == 'assalamualikum'){
        return 'walikymassalam nur';
    }
    else if(keyword == "clear"){
        clear();
    }
    else{
        return 'wrong keyword!';
    }
}