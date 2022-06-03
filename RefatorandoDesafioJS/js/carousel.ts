//carousel
type CarouselType = string[];
//Array storage class
let carouselArr: CarouselType = [];

// class Carousel

class Carousel {
	static _sequence: number;
	static _size: number;
	static _interval: number;
	constructor(
		public image: string,
		public title: string,
		public link: string
	) {}

	static Start(arr: CarouselType): void {
		if (arr) {
			if (arr.length > 0) {
				Carousel._sequence = -1;
				Carousel._size = arr.length;
				Carousel.Next(); //start
				Carousel._interval = setInterval(function () {
					Carousel.Next();
				}, 2000);
			}
		} else {
			throw 'Method Start need a Array Variable.';
		}
	}

	static Next(): void {
		this._sequence += 1;

		if (this._sequence >= this._size) {
			this._sequence = 0;
		}

		let displayCarousel = document.getElementById('carousel');
		let displayCarouselTitle = document.getElementById('carousel-title');

		if (displayCarousel) {
			displayCarousel.innerHTML = inserirImagem(
				carouselArr[this._sequence]
			);
		}

		if (displayCarouselTitle) {
			displayCarouselTitle.innerHTML = inserirTitulo(
				carouselArr[this._sequence]
			);
		}
	}
}

type UHH = { title: string; image: string; link: string };
function inserirImagem(array: any): string {
	return `<a href="${array.link}"><img class="img-selected" alt="${array.image}"src="./img/${array.image}"></a>`;
}

function inserirTitulo(array: any): string {
	return `<a href="${array.link}"> ${array.title}</a>`;
}
