document.addEventListener('DOMContentLoaded', () => {
    let slides = document.querySelectorAll('.slide');
    const captions = document.querySelectorAll(".captions_div .img_caption"); // Get all captions
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 2;

    function updateSlides() {
        slides.forEach((slide, i) => {
            const offset = (i - currentIndex) * 100;
            if (i === (currentIndex + slides.length - 2) % slides.length || 
                i === (currentIndex + 2) % slides.length ||
                i === (currentIndex + slides.length - 1) % slides.length || 
                i === (currentIndex + 1) % slides.length || 
                i === currentIndex) {
                if(i===currentIndex){
                    captions[Number(slide.getAttribute("alt"))-1].classList.add("active");
                }else{
                    captions[Number(slide.getAttribute("alt"))-1].classList.remove("active");
                }
                console.log(slide.getAttribute("alt"));
                slide.style.display = 'block'; // Only display the necessary slides
                slide.style.transform = `translateX(${offset}%) scale(${i === currentIndex ? 1 : 0.9})`;
                slide.style.opacity = i === currentIndex ? '1' : '0.3';
            } else {
                captions[Number(slide.getAttribute("alt"))-1].classList.remove("active");
                slide.style.display = 'none'; // Hide slides not needed in view
            }
            slide.style.zIndex = i === currentIndex ? '1' : '0';
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex) % slides.length;
        const newSlides = [];
        slides.forEach((slide, i) => {
            if(i!=0){
                newSlides.push(slide);
            }
        });
        newSlides.push(slides[0]);
        slides = newSlides;
        console.log(currentIndex);
        console.log(slides);
        updateSlides();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex + slides.length) % slides.length;
        const newSlides = [];
        slides.forEach((slide, i) => {
            if(i!=slides.length-1){
                newSlides.push(slide);
            }
        });
        newSlides.unshift(slides[slides.length-1]);
        slides = newSlides;
        console.log(currentIndex);
        console.log(slides);
        updateSlides();
    }

    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);

    // Initial display
    updateSlides();
});
