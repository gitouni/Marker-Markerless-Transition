document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const imageAfter = document.querySelector('.image-after');
    const sliderLine = document.querySelector('.slider-line');
    const sliderButton = document.querySelector('.slider-button');

    // 滑块拖动事件
    slider.addEventListener('input', (e) => {
        const value = e.target.value;
        imageAfter.style.width = `${value}%`;
        sliderLine.style.left = `${value}%`;
        sliderButton.style.left = `${value}%`;
    });

    // 鼠标拖拽交互增强
    let isDragging = false;
    
    sliderButton.addEventListener('mousedown', () => {
        isDragging = true;
        document.body.classList.add('dragging');
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const container = document.querySelector('.image-compare');
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            
            const clamped = Math.max(0, Math.min(100, percentage));
            slider.value = clamped;
            imageAfter.style.width = `${clamped}%`;
            sliderLine.style.left = `${clamped}%`;
            sliderButton.style.left = `${clamped}%`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.classList.remove('dragging');
    });
});
