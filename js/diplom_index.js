// tabs -- start

const tabsIndexLink = document.querySelectorAll(`[data-bgtab]`),
    tabsContent = document.querySelectorAll(`.tab-content`),
    tabsMenuArea = document.querySelector(`.hero-menu_header`);

    tabsMenuArea.addEventListener(`click`, (event)=> {
    const target = event.target;
    tabsIndexLink.forEach((item, i) => {
        if (target == item ){
            hideTabsContent();
            showTadContent(i);
        }
    })
})
function hideTabsContent() {
    tabsContent.forEach(item =>{
        item.style.display =`none`;
    });
    tabsIndexLink.forEach (item =>{
        item.parentNode.classList.remove(`current`);
    });
}
function showTadContent(i = 0) {
    tabsContent[i].style.display =`block`;
    tabsIndexLink[i].parentNode.classList.add(`current`);
}

//tabs -- end
//carousel -- start

const eventsSlides = document.querySelector(`.events-carousel-wrap`).querySelectorAll(`.swiper-slide`),
        eventsPrevBtn  = document.querySelector(`.ec-button-prev`),
        eventsNextBtn = document.querySelector(`.ec-button-next`);

let slideIndex = 1;

showCarouselSlides(slideIndex);

function showCarouselSlides(n){
    if(n>eventsSlides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex =eventsSlides.length;
    } 
    eventsSlides.forEach (item => item.style.display =`none`);
    eventsSlides[slideIndex-1].style.display = `block`;
} 
function plusCarouselSlides (n) {
    showCarouselSlides(slideIndex +=n);
}
eventsPrevBtn.addEventListener(`click`, ()=> {
    plusCarouselSlides(-1)
})
eventsNextBtn.addEventListener(`click`, ()=> {
    plusCarouselSlides(1)
})

//carousel -- end
//slider -- start

const testimonilasSlides = document.querySelector(`.testimonilas-carousel`).querySelectorAll(`.swiper-slide`),
testimonilasPrevBtn  = document.querySelector(`.tc-button-prev`),
testimonilasNextBtn = document.querySelector(`.tc-button-next`);

showSliderSlides(slideIndex);

function showSliderSlides(n) {
    if (n> testimonilasSlides.length){
        slideIndex =1;
    }
    if (n<1){
        slideIndex =testimonilasSlides.length;
    }
    testimonilasSlides.forEach(item => item.style.display =`none`);
    testimonilasSlides[slideIndex-1].style.display =`block`;
}
function plusTestimonilasSlides (n) {
    showSliderSlides(slideIndex +=n);
}
testimonilasPrevBtn.addEventListener(`click`, ()=> {
    plusTestimonilasSlides(-1)
})
testimonilasNextBtn.addEventListener(`click`, ()=> {
    plusTestimonilasSlides(1)
})

//slider -- end



