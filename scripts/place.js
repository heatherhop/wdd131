const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `©<span>${today.getFullYear()}<span> | Heather Hopkins | Utah, USA`;


const lastModified = document.querySelector("#lastModified")
lastModified.innerHTML = `<span>Last Modification: ${(document.lastModified)}</span>`

// const temperature = document.querySelector("#temperature")
// const windSpeed = document.querySelector("#windSpeed")

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        const windChill = Math.round(35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + ((0.4275 * temperature * windSpeed) ** 0.16));
        return windChill
    }
    else {
        return "N/A"
    }
}
calcValue = calculateWindChill(10, 5);
const windChill = document.querySelector("#windChill");
windChill.innerHTML = `<span>${calcValue} ℉</span>`;
