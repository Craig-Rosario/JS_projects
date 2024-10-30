// Retrieve total and pizza counts from localStorage or initialize if not set
let total = parseInt(localStorage.getItem('total')) || 0;
let bbq_count = parseInt(localStorage.getItem('bbq_count')) || 0;
let ppr_count = parseInt(localStorage.getItem('ppr_count')) || 0;
let mgh_count = parseInt(localStorage.getItem('mgh_count')) || 0;

// Update the display with the current total
function updateTotalDisplay() {
    const moneyElement = document.querySelector("#money");
    if (moneyElement) {
        moneyElement.textContent = "Your total is: " + total + "$";
    }
}

// Update the display for pizza counts in order.html
function updatePizzaDisplay() {
    const bbqElement = document.querySelector("#bbqDisplay");
    const pprElement = document.querySelector("#pprDisplay");
    const mghElement = document.querySelector("#mghDisplay");

    if (bbqElement) bbqElement.textContent = "Barbeque Pizza x " + bbq_count;
    if (pprElement) pprElement.textContent = "Pepperoni Pizza x " + ppr_count;
    if (mghElement) mghElement.textContent = "Margarita Pizza x " + mgh_count;
}

// Navigation buttons
document.querySelector('#HomeButton').onclick = function () {
    window.location.href = 'home.html';
}

document.querySelector('#MenuButton').onclick = function () {
    window.location.href = 'menu.html';
}

document.querySelector('#OrderButton').onclick = function () {
    window.location.href = 'order.html';
}

// Pizza buttons
document.querySelector('#BBQ')?.addEventListener('click', function () {
    total += 15;
    bbq_count += 1;
    localStorage.setItem('total', total);
    localStorage.setItem('bbq_count', bbq_count);
    updateTotalDisplay();
    updatePizzaDisplay();
});

document.querySelector('#PPR')?.addEventListener('click', function () {
    total += 12;
    ppr_count += 1;
    localStorage.setItem('total', total);
    localStorage.setItem('ppr_count', ppr_count);
    updateTotalDisplay();
    updatePizzaDisplay();
});

document.querySelector('#MGH')?.addEventListener('click', function () {
    total += 8;
    mgh_count += 1;
    localStorage.setItem('total', total);
    localStorage.setItem('mgh_count', mgh_count);
    updateTotalDisplay();
    updatePizzaDisplay();
});

// Initial display update when the page loads
updateTotalDisplay();
updatePizzaDisplay();
