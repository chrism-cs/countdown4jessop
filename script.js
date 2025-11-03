// In format YYYY-MM-DDTHH:MM:SS with T being a seperator. 
const returnDate = new Date("2026-06-03T00:00:00");

const options = {year: 'numeric', month: 'long', day:'numeric'};
document.getElementById("return-date").textContent = returnDate.toLocaleDateString(undefined, options);

function updateCountdown() {
    const now = new Date();
    const diff = returnDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
