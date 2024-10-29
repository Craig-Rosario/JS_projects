let total = 0;

function update() {
    console.log("UPDATEE");
    document.querySelector("#money").textContent = "Your total is: " + total + "$";
}

document.addEventListener('DOMContentLoaded', () => {
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
        console.log("Total is: " + total);
        update();
    }

    document.querySelector('#PPR').onclick = function() {
        total += 12;
        console.log("Total is: " + total);
        update();
    }

    document.querySelector('#MGH').onclick = function() {
        total += 8;
        console.log("Total is: " + total);
        update();
    }

    update(); // Initialize display
});
