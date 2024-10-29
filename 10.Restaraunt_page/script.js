



let total = parseInt(localStorage.getItem('total')) || 0;

document.querySelector('#HomeButton').onclick = function() {
    window.location.href = 'home.html';
}

document.querySelector('#MenuButton').onclick = function() {
    window.location.href = 'menu.html';
}

document.querySelector('#OrderButton').onclick = function() {

    window.location.href = 'order.html';
}

document.querySelector('#BBQ').onclick = function() {
    total += 15;
    localStorage.setItem('total', total);
    console.log("Total is: " + total);
}
console.log("HI")

document.querySelector('#PPR').onclick = function() {
    total += 12;
    localStorage.setItem('total', total);
    console.log("Total is: " + total);
}
console.log("HI")

document.querySelector('#MGH').onclick = function() {
    total += 8;
    localStorage.setItem('total', total);
    console.log("Total is: " + total);
}
