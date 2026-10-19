function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000)
updateClock();

    const close = document.getElementById('close');
    const popup = document.getElementById('popup');
    window.addEventListener('load', () => {
        popup.style.display = 'flex';
    });
    close.addEventListener('click', () => {
        popup.style.display = 'none';
    })
