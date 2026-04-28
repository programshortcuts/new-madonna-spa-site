// change-background.js
export function initBgSlider() {
    const container = document.querySelector('.bg-slider');
    if (!container) return;

    const slides = container.querySelectorAll('.bg-slide');
    
    const images = [
        "../../imgs/peptide-header.png",
        "../../imgs/rustic-rockymoutains-1024.JPEG"
        // "../../imgs/rustic-rockymoutains-1024.JPEG"
        // "pages/medical-spa-services/media/AS-Botox2000.webp.png",
        // "pages/ivInfustionTherepy/media/iv-infusion.jpeg"
        // "../imgs/MadMediSpa-sihlouette.png",
    ];

    // assign images
    slides.forEach((slide, i) => {
        slide.style.backgroundImage = `url(${images[i]})`;
        // if(images[i] === "pages/medical-spa-services/media/AS-Botox2000.webp.png"){
        //     slide.classList.add('xMove')
        // }
        // if (images[i] === "pages/home/media/peptide-header.png"){
        //     console.log('petitde')
            
        //         slide.classList.add('zoomOut')
        // }
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

    }, 3000);
}