
// window.onload = function () {
// 	window.addEventListener('scroll', function (e) {
// 		if (window.pageYOffset > 100) {
// 			document.querySelector("header").classList.add('is-scrolling');
// 		} else {
// 			document.querySelector("header").classList.remove('is-scrolling');
// 		}
// 	});

		// const menu_btn = document.querySelector('.mini-menu');
		// const mobile_menu = document.querySelector('.mobile-nav');

		// menu_btn.addEventListener('click', function () {
		// 	menu_btn.classList.toggle('is-active');
		// 	mobile_menu.classList.toggle('is-active');
		// });


	document.addEventListener('DOMContentLoaded', function() {
		const menuImage = document.getElementById('menuImage');
		const menu = document.getElementById('menu');
		menuImage.addEventListener('click', function() {
			// Toggle the 'hidden' class on the menu to show/hide it
			menu.classList.toggle('hidden');
		});
	});