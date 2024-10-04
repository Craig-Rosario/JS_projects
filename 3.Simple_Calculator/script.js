

const display=document.getElementById("display");

function display_res(input){
    display.value+=input;
}


function clear_res(){
    display.value=" ";
}


function calc(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Err";
    }
}