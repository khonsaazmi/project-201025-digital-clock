// DIGITAL CLOCK

function updateClock() {
    const now = new Date(); // Current date and time
    let hours = now.getHours();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    hours = hours.toString().padStart(2, '0'); // 01-12
    const minutes = now.getMinutes().toString().padStart(2, '0'); // 00-59
    const seconds = now.getSeconds().toString().padStart(2, '0'); // 00-59
    const timeString = `${hours}:${minutes}:${seconds}:${meridiem}`;
    document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000); // Update every second