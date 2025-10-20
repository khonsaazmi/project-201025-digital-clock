// DIGITAL CLOCK

function updateClock() {
    const now = new Date(); // Current date and time
    let hours = now.getHours().toString().padStart(2, '0'); // 00-23
    const minutes = now.getMinutes().toString().padStart(2, '0'); // 00-59
    const seconds = now.getSeconds().toString().padStart(2, '0'); // 00-59
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000); // Update every second