'use strict';

//=== Mobile toggler ===\\
const navLink = document.querySelector(".nav-links");
const mobToggle = document.querySelector(".toggle-mnu");

mobToggle.addEventListener('click', () => {
	mobToggle.classList.toggle('on');
}, false);

mobToggle.addEventListener( 'click', function () {
	navLink.classList.toggle("show");
}, false);

//=== Button to top ===\
const btnToTop = document.getElementById("btn-to-top");

btnToTop.addEventListener( "click", function() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});

window.addEventListener("scroll", function() {
	btnToTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});

//=== Carousel ===\\
let flkty = new Flickity( ".product-carousel", {
	wrapAround: true,
	autoPlay: 2500,
	groupCells: 3,
	prevNextButtons: false,
});

//=== Scroll to ===\\
const anchors = document.querySelectorAll('.scroll-to');

	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			const blockID = anchor.getAttribute('href').substr(1);

			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}