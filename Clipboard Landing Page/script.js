window.scrollTo(0, 0);

window.addEventListener('load', function () {
	AOS.init();
});

const anim = anime.timeline({
	loop: false,
	direction: 'alternate',
});

anim.add({
	targets: '#circle #f',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeInOutQuart',
	duration: 2000,
	delay: function (el, i) {
		return i * 250;
	},
})
	.add({
		targets: '#circle #c',
		duration: 1000,
		opacity: 1,
		easing: 'easeInOutQuart',
	})
	.add({
		targets: '#loader-cont',
		duration: 1000,
		paddingTop: 130,
		height: 255,

		easing: 'easeInOutQuart',
	})
	.add({
		targets: '#loader',
		duration: 1000,
		delay: 1000,
		opacity: 0,
		easing: 'easeInOutQuart',
		begin: function () {
			order = document.querySelectorAll('[data-order]');
			for (let i = 0; i < order.length; i++) {
				order[i].style.opacity = '0';
			}
		},
	})
	.add({
		begin: function () {
			document.querySelector('#loader').style.display = 'none';
			document.body.style.overflow = 'initial';
			var delay = 0;
			order = document.querySelectorAll('[data-order]');
			for (let i = 0; i < order.length; i++) {
				order[i].classList.add('animate__fadeInDown');
				delay += 350;
				f = order[i].style.animationDelay = delay + 'ms';
			}
		},
	});
