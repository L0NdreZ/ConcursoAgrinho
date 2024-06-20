document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {
        slides[index].style.transform = "translateX(-100%)";
        index = (index + 1) % slides.length;
        slides[index].style.transform = "translateX(0)";
    }, 5000);
});
// Inicialização do carrossel de notícias
$('.carousel').carousel();
