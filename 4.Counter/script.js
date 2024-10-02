let count = 0; // Initialize count to 0

document.getElementById("decr").onclick = function() {
    count--;
    document.getElementById("count").textContent = count;
}

document.getElementById("rst").onclick = function() {
    count = 0;
    document.getElementById("count").textContent = count;
}

document.getElementById("incr").onclick = function() {
    count++;
    document.getElementById("count").textContent = count;
}
