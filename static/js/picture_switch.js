const pointer = document.getElementById('pointer');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

pointer.addEventListener('mousedown', startDrag);

function startDrag(e) {
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function drag(e) {
    const posX = e.clientX;
    const rect = document.querySelector('.overlay-wrapper').getBoundingClientRect();
    const pointerPos = (posX - rect.left) / rect.width * 100;

    pointer.style.left = pointerPos + '%';
    image1.style.width = pointerPos + '%';
    image2.style.width = 100 - pointerPos + '%';
}

function stopDrag() {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}
