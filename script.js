const myInput = document.getElementById('myInput');
const toFar = document.getElementById('toFar');
const toCel = document.getElementById('toCel');
const myBtn = document.getElementById('myBtn');
const result = document.getElementById('result');

let temperature;

function convertTemp() {
    if(toFar.checked) {
        temperature = Number(myInput.value);
        temperature = temperature * 9 / 5 + 32;
        result.textContent = temperature.toFixed(1) + " °F";
    } else if(toCel.checked) {
        temperature = Number(myInput.value);
        temperature = (temperature - 32) * (5 / 9);
        result.textContent = temperature.toFixed(1) + "°C";
    }else {
        result.textContent = "Select a unit!"
    }
} 