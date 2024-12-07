document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".image-slider");
    const handle = document.querySelector(".slider-handle");
    const imageA = document.querySelector(".imageA");
    const imageB = document.querySelector(".imageB");

    slider.addEventListener("mousemove", (event) => {
        const rect = slider.getBoundingClientRect();
        const offsetX = event.clientX - rect.left; // 鼠标在容器内的相对X坐标
        const percentage = (offsetX / rect.width) * 100; // 转换为百分比

        // 调整图片裁剪区域和滑块位置
        imageA.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        imageB.style.clipPath = `inset(0 0 0 ${percentage}%)`;
        handle.style.left = `${percentage}%`;
    });

    slider.addEventListener("mouseleave", () => {
        // 鼠标离开时恢复初始状态
        imageA.style.clipPath = "inset(0 50% 0 0)";
        imageB.style.clipPath = "inset(0 0 0 50%)";
        handle.style.left = "50%";
    });
});
