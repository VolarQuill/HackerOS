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


let topZ = 10;

function makeDraggable(win, handle) {
    let x = 0, y = 0, startX = 0, startY = 0, dragging = false;

    // clicking a window brings it to the front
    win.addEventListener('pointerdown', () => {
        win.style.zIndex = ++topZ;
    });

    handle.addEventListener('pointerdown', (e) => {
        if (e.target.closest('button')) return; // don't start a drag when clicking X
        dragging = true;
        startX = e.clientX - x;
        startY = e.clientY - y;
        handle.setPointerCapture(e.pointerId);
    });

    handle.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        x = e.clientX - startX;
        y = e.clientY - startY;
        win.style.transform = `translate(${x}px, ${y}px)`;
    });

    handle.addEventListener('pointerup', () => {
        dragging = false;
    });
}

makeDraggable(popup, document.getElementById('popuphandle'));

const notesWindow = document.getElementById('noteswindow');
makeDraggable(notesWindow, document.getElementById('noteshandle'));

document.getElementById('notesbtn').addEventListener('click', () => {
    notesWindow.style.display = 'flex';
    notesWindow.style.zIndex = ++topZ;
    notesArea.focus();
});

document.getElementById('notesclose').addEventListener('click', () => {
    notesWindow.style.display = 'none';
});

const notesArea = document.querySelector('.notesarea');

try {
    notesArea.value = localStorage.getItem('hackeros-notes') || '';
} catch (e) {}

notesArea.addEventListener('input', () => {
    try {
        localStorage.setItem('hackeros-notes', notesArea.value);
    } catch (e) {}
});