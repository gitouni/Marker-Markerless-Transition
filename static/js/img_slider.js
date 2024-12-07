document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".image-slider");
    const overlay = document.querySelector(".slider-overlay");
    const imageContainer = document.querySelector(".image-container");

    slider.addEventListener("mousemove", (event) => {
        const rect = slider.getBoundingClientRect();
        const offsetX = event.clientX - rect.left; // 获取鼠标相对于 slider 的 X 坐标
        const sliderWidth = slider.offsetWidth;

        // 调整覆盖层位置
        const percentage = (offsetX / sliderWidth) * 100;
        overlay.style.left = `${percentage}%`;

        // 调整图片容器位置
        imageContainer.style.transform = `translateX(-${percentage}%)`;
    });

    slider.addEventListener("mouseleave", () => {
        // 鼠标离开时重置状态
        overlay.style.left = "50%";
        imageContainer.style.transform = "translateX(-50%)";
    });
});
