document.getElementById("convertBtn").addEventListener("click", convertTemperature);

function convertTemperature() {

    const tempInput = document.getElementById("tempInput").value;
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    const temp = parseFloat(tempInput);

    if (isNaN(temp)) {
        result.innerText = "Please enter a valid number!";
        return;
    }

    let output = "";

    if (unit === "celsius") {
        const fahrenheit = (temp * 9/5) + 32;
        const kelvin = temp + 273.15;
        output = `${temp} °C = ${fahrenheit.toFixed(2)} °F | ${kelvin.toFixed(2)} K`;
    }

    else if (unit === "fahrenheit") {
        const celsius = (temp - 32) * 5/9;
        const kelvin = celsius + 273.15;
        output = `${temp} °F = ${celsius.toFixed(2)} °C | ${kelvin.toFixed(2)} K`;
    }

    else if (unit === "kelvin") {
        const celsius = temp - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        output = `${temp} K = ${celsius.toFixed(2)} °C | ${fahrenheit.toFixed(2)} °F`;
    }

    result.innerText = output;
}