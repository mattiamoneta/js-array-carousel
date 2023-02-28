const imagesList = [
    './img/1.webp',
    './img/2.webp',
    './img/3.webp',
    './img/4.webp',
    './img/5.webp',

];

let activeItem = 0;
const domBtnPrev = document.getElementById('btnPrev');
const domBtnNext = document.getElementById('btnNext');
const domCarouselStack = document.querySelector('.carousel-stack');
const domCarouselThumbnails = document.querySelector('.carousel-thumbnails');


let carouselStackInner = '';
let carouselThumbnailsInner = '';
for (let i = 0; i < imagesList.length; i++){
    carouselStackInner += `<img class="carousel-img" src="${imagesList[i]}" alt="Image"/>`;
    carouselThumbnailsInner += `<div class="thumbnail-wrapper"><div class="thumbnail-overlay"></div><img class="thumbnail" src="${imagesList[i]}" alt="Image"/></div>`;
}

domCarouselStack.innerHTML = carouselStackInner;
domCarouselThumbnails.innerHTML = carouselThumbnailsInner;


const domCarouselItems = document.getElementsByClassName('carousel-img');
const domThumbnailItems = document.getElementsByClassName('thumbnail-wrapper');
domCarouselItems[activeItem].classList.add('current');
domThumbnailItems[activeItem].classList.add('current');

// Click bottone avanti
domBtnNext.addEventListener('click',function(){
   
    if (activeItem < domCarouselItems.length - 1){
        domCarouselItems[activeItem].classList.remove('current');
        domThumbnailItems[activeItem].classList.remove('current');
        activeItem++;
        domCarouselItems[activeItem].classList.add('current');
        domThumbnailItems[activeItem].classList.add('current');

    } else if (activeItem == domCarouselItems.length - 1){
        domCarouselItems[activeItem].classList.remove('current');
        domThumbnailItems[activeItem].classList.remove('current');
        activeItem = 0;
        domCarouselItems[activeItem].classList.add('current');
        domThumbnailItems[activeItem].classList.add('current');
    }

});

// Click bottone indietro
domBtnPrev.addEventListener('click',function(){
   
    if (activeItem > 0){
        domCarouselItems[activeItem].classList.remove('current');
        domThumbnailItems[activeItem].classList.remove('current');
        activeItem--;
        domCarouselItems[activeItem].classList.add('current');
        domThumbnailItems[activeItem].classList.add('current');

    } else if (activeItem == 0){
        domCarouselItems[activeItem].classList.remove('current');
        domThumbnailItems[activeItem].classList.remove('current');
        activeItem = domCarouselItems.length - 1;
        domCarouselItems[activeItem].classList.add('current');
        domThumbnailItems[activeItem].classList.add('current');
    }

});


