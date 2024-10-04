const display = document.getElementById("display");

function display_res(input) {
    if (input === '=') {
        calc();
    } else {
        display.textContent += input; 
    }
}

function clear_res() {
    display.textContent = ""; 
}

function calc() {
    try {
        display.textContent = eval(display.textContent); 
    } catch (error) {
        display.textContent = "Err"; 
    }
}
