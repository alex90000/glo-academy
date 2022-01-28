const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    speed: 900,
    spaceBetween: 70,
    centeredSlides: true,
    slideToClickedSlide: true,
    toggle: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    breakpoints: {
        320: {
            direction: 'vertical',
            slidesPerView: 3,
            mousewheel: true,
            loop: true,
            spaceBetween: 110,
        },
        891: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 70
        }
    }
});


const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main_display__button');

buttonModal.addEventListener('click', () => {
    modalWindow.classList.add('active');
    document.body.classList.add('stop-scrolling');
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');
    if (!isModal) {
        modalWindow.classList.remove('active');
        document.body.classList.remove('stop-scrolling');
    }
})