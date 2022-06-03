"use strict";
//Array storage class
let carouselArr = [];
// class Carousel
class Carousel {
    image;
    title;
    link;
    static _sequence;
    static _size;
    static _interval;
    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }
    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._sequence = -1;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function () {
                    Carousel.Next();
                }, 2000);
            }
        }
        else {
            throw 'Method Start need a Array Variable.';
        }
    }
    static Next() {
        this._sequence += 1;
        if (this._sequence >= this._size) {
            this._sequence = 0;
        }
        let displayCarousel = document.getElementById('carousel');
        let displayCarouselTitle = document.getElementById('carousel-title');
        if (displayCarousel) {
            displayCarousel.innerHTML = inserirImagem(carouselArr[this._sequence]);
        }
        if (displayCarouselTitle) {
            displayCarouselTitle.innerHTML = inserirTitulo(carouselArr[this._sequence]);
        }
    }
}
function inserirImagem(array) {
    return `<a href="${array.link}"><img class="img-selected" alt="${array.image}"src="./img/${array.image}"></a>`;
}
function inserirTitulo(array) {
    return `<a href="${array.link}"> ${array.title}</a>`;
}
