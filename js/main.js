const imagesList = [
    './img/1.webp',
    './img/2.webp',
    './img/3.webp',
    './img/4.webp',
    './img/5.webp'
];

let activeItem = 0;
const domBtnPrev = document.getElementById('btnPrev');
const domBtnNext = document.getElementById('btnNext');
const domCarouselStack = document.querySelector('.carousel-stack');


let carouselStackInner = '';
for (let i = 0; i < imagesList.length; i++){
    carouselStackInner += `<img class="carousel-img" src="${imagesList[i]}" alt="Image"/>`;
}

domCarouselStack.innerHTML = carouselStackInner;


const domCarouselItems = document.getElementsByClassName('carousel-img');
domCarouselItems[activeItem].classList.add('current');


// Click bottone avanti
domBtnNext.addEventListener('click',function(){
   
    if (activeItem < domCarouselItems.length - 1){
        domCarouselItems[activeItem].classList.remove('current');
        activeItem++;
        domCarouselItems[activeItem].classList.add('current');
        domBtnNext.classList.remove('hide');
        domBtnPrev.classList.remove('hide');
        
        if (activeItem == domCarouselItems.length - 1){
            domBtnNext.classList.add('hide');
        }

    }

});

// Click bottone indietro
domBtnPrev.addEventListener('click',function(){
   
    if (activeItem > 0){
        domCarouselItems[activeItem].classList.remove('current');
        activeItem--;
        domCarouselItems[activeItem].classList.add('current');
        domBtnNext.classList.remove('hide');
        domBtnPrev.classList.remove('hide');
        
        if (activeItem == 0){
            domBtnPrev.classList.add('hide');
        }

    }

});


