document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.fade-in');
    setTimeout(() => {
        container.classList.add('visible');
    }, 100);
});