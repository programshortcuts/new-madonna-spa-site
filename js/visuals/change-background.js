
export function initBgSlider() {
    const container = document.querySelector('.bg-slider');
    if (!container) return;

    const slides = container.querySelectorAll('.bg-slide');

    const images = [
        "imgs/istock/istockphoto01.jpg",
        "imgs/woman-man.png",
        "imgs/rustic-rockymoutains-1024.JPEG"
        // "imgs/peptide-header.png"
        // "imgs/rustic-rockymoutains-1024.JPEG"
        // "pages/medical-spa-services/media/AS-Botox2000.webp.png",
        // "pages/ivInfustionTherepy/media/iv-infusion.jpeg"
        // "../imgs/MadMediSpa-sihlouette.png",
    ];

    slides.forEach((slide, i) => {
        const img = images[i % images.length]; // loops images if fewer

        slide.style.backgroundImage = `url(${img})`;
    });
    let current = 0;

    
    setInterval(() => {
        const currentSlide = slides[current];
        const nextIndex = (current + 1) % slides.length;
        const nextSlide = slides[nextIndex];

        // fade out current
        currentSlide.classList.remove('active');

        // fade in next
        nextSlide.classList.add('active');

        current = nextIndex;

    }, 4000);
}