'use strict';

//Toggler
const toggler = document.querySelector('#toggler');
const close = document.querySelector('#menu-close');

toggler.addEventListener('click', function() {
	let slide = document.getElementsByClassName('slide-menu')[0]
		.classList.toggle("active");
}, false);

close.addEventListener('click', function() {
	let slide = document.getElementsByClassName('slide-menu')[0]
		.classList.toggle("active");
}, false);

//Mobile toggler
const togglerMob = document.querySelector('#mob-toggler');

togglerMob.addEventListener('click', function() {
	let slide = document.getElementsByClassName('slide-menu')[0]
		.classList.toggle("active");
}, false);

//Video
$(document).ready(function() {
	$('.youtube-popup').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		preloader: true,
	});
});

//WOW Animation
const wow = new WOW(
	{
	boxClass: 'wow',
	animateClass: 'animated',
	offset: 0,
	mobile: true,
	live: true,
	scrollContainer: null,
	resetAnimation: true,
}
);
wow.init();