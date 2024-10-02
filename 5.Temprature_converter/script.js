

document.getElementById("submit").onclick=function(){
    
    
    const val = document.getElementById("input").value;

    if(isNaN(val) || val==""){
        console.log("Please enter a valid number.");
        return; 
    }

    if (document.getElementById("Celcius").checked) {
        const fahrenheit = (val * 9/5) + 32;
        document.getElementById("result").textContent = `Temperature in Fahrenheit is ${fahrenheit.toFixed(2)} degrees.`;
    }
    else if (document.getElementById("Fahrenheit").checked) {
        const celsius = (val - 32) * 5/9;
        document.getElementById("result").textContent = `Temperature in Celsius is ${celsius.toFixed(2)} degrees.`;
    }

    else{
        document.getElementById("result").textContent="Please choose Farenheit or celcius";
    }


}