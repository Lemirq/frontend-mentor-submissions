const cards = [
	{
		name: 'Clipboard App Landing Page with CSSFlex, Anime.js, AOS, animate.style',
		difficulty: 'junior',
		url: './Clipboard Landing Page/index.html',
	},
	{
		name: 'Interactive and Responsive Card Details Form with CSS Flexbox',
		difficulty: 'junior',
		url: './Interactive Card Details Form/index.html',
	},
	{
		name: 'Profile Card Component with CSS Flexbox & Grid',
		difficulty: 'newbie',
		url: './Profile Card Component/index.html',
	},
	{
		name: '3 Column Preview Card Component with Tailwind CSS',
		difficulty: 'newbie',
		url: './3 Column Preview Card Component/index.html',
	},
	{
		name: 'Responsive QR Code Card Component using CSS Flexbox',
		difficulty: 'newbie',
		url: './QR Code Component/index.html',
	},
	{
		name: 'Responsive Product Preview Card Component using CSS Flexbox',
		difficulty: 'newbie',
		url: './Product preview card component/index.html',
	},
	{
		name: 'Interactive Rating Component with CSS Flexbox',
		difficulty: 'newbie',
		url: './Interactive Rating Component/index.html',
	},
	{
		name: 'Responsive NFT Preview Card Component using CSS Flexbox & CSS Grid',
		difficulty: 'newbie',
		url: './NFT Preview Card Component/index.html',
	},
	{
		name: 'Responsive Order Summary Component with CSS Flexbox & CSS Grid',
		difficulty: 'newbie',
		url: './Order Summary Component/index.html',
	},
	{
		name: 'Responsive Stats Preview Card Component with CSS Flexbox & CSS Grid',
		difficulty: 'newbie',
		url: './Stats Preview Card Component/index.html',
	},
];

// Initalize all the cards
for (let i = 0; i < cards.length; i++) {
	const html = `
	<div style="animation-delay: ${i / 10}s;" onclick="window.open('${cards[i].url}')" class=" animate__animated animate__fadeIn ${cards[i].difficulty} card">
	${cards[i].name}
	</div>
	`;
	document.querySelector('.grid').insertAdjacentHTML('beforeend', html);
}

// Filter Variables
const newbie = document.getElementById('newbie');
const junior = document.getElementById('junior');
const intermediate = document.getElementById('intermediate');
const advanced = document.getElementById('advanced');
const guru = document.getElementById('guru');
const clear = document.getElementById('clear');
const grid = document.querySelector('.grid').children;
const filterArray = [newbie, junior, intermediate, advanced, guru];

// Card Elements Variables
const newbieEl = document.querySelectorAll('.newbie');
const juniorEl = document.querySelectorAll('.junior');
const intermediateEl = document.querySelectorAll('.intermediate');
const advancedEl = document.querySelectorAll('.advanced');
const guruEl = document.querySelectorAll('.guru');

const lightness = '70%';

// Gets exact timing
let timing;
function getTiming() {
	for (let i = 0; i < grid.length; i++) {
		if (grid[i].style.display == 'none') {
			timing = 500;
		} else {
			const element = grid[i];
			let delay = element.style.animationDelay;
			let duration = 0.8;
			delay = delay.replace(/s/g, '');
			delay = parseFloat(delay);
			timing = duration + delay;
			timing = timing.toPrecision(4) * 1000;
		}
	}
}

// Filter Functions
newbie.addEventListener('click', () => {
	getTiming();
	for (let i = 0; i < filterArray.length; i++) {
		const element = filterArray[i];
		element.style.setProperty('--lightness', '80%');
	}
	newbie.style.setProperty('--lightness', lightness);
	for (let i = 0; i < grid.length; i++) {
		grid[i].classList.add('animate__animated', 'animate__fadeOut');
	}
	setTimeout(() => {
		for (let i = 0; i < newbieEl.length; i++) {
			let el = document.querySelectorAll('.card:not(.newbie)');
			for (let j = 0; j < el.length; j++) {
				el[j].style.display = 'none';
			}
			newbieEl[i].style.display = 'flex';
			newbieEl[i].classList.remove('animate__fadeOut');
			newbieEl[i].classList.add('animate__fadeIn');
		}
	}, timing);
});

junior.addEventListener('click', () => {
	getTiming();
	for (let i = 0; i < filterArray.length; i++) {
		const element = filterArray[i];
		element.style.setProperty('--lightness', '80%');
	}
	junior.style.setProperty('--lightness', lightness);
	for (let i = 0; i < grid.length; i++) {
		grid[i].classList.add('animate__animated', 'animate__fadeOut');
	}
	setTimeout(() => {
		for (let i = 0; i < juniorEl.length; i++) {
			let el = document.querySelectorAll('.card:not(.junior)');
			for (let j = 0; j < el.length; j++) {
				el[j].style.display = 'none';
			}
			juniorEl[i].style.display = 'flex';
			juniorEl[i].classList.remove('animate__fadeOut');
			juniorEl[i].classList.add('animate__fadeIn');
		}
	}, timing);
});

intermediate.addEventListener('click', () => {
	getTiming();
	for (let i = 0; i < filterArray.length; i++) {
		const element = filterArray[i];
		element.style.setProperty('--lightness', '80%');
	}
	intermediate.style.setProperty('--lightness', lightness);
	for (let i = 0; i < grid.length; i++) {
		grid[i].classList.add('animate__animated', 'animate__fadeOut');
	}
	setTimeout(() => {
		for (let i = 0; i < intermediateEl.length; i++) {
			let el = document.querySelectorAll('.card:not(.intermediate)');
			for (let j = 0; j < el.length; j++) {
				el[j].style.display = 'none';
			}
			intermediateEl[i].style.display = 'flex';
			intermediateEl[i].classList.remove('animate__fadeOut');
			intermediateEl[i].classList.add('animate__fadeIn');
		}
	}, timing);
});

advanced.addEventListener('click', () => {
	getTiming();
	for (let i = 0; i < filterArray.length; i++) {
		const element = filterArray[i];
		element.style.setProperty('--lightness', '80%');
	}
	advanced.style.setProperty('--lightness', lightness);
	for (let i = 0; i < grid.length; i++) {
		grid[i].classList.add('animate__animated', 'animate__fadeOut');
	}
	setTimeout(() => {
		for (let i = 0; i < advancedEl.length; i++) {
			let el = document.querySelectorAll('.card:not(.advanced)');
			for (let j = 0; j < el.length; j++) {
				el[j].style.display = 'none';
			}
			advancedEl[i].style.display = 'flex';
			advancedEl[i].classList.remove('animate__fadeOut');
			advancedEl[i].classList.add('animate__fadeIn');
		}
	}, timing);
});

guru.addEventListener('click', () => {
	getTiming();
	for (let i = 0; i < filterArray.length; i++) {
		const element = filterArray[i];
		element.style.setProperty('--lightness', '80%');
	}
	guru.style.setProperty('--lightness', lightness);
	for (let i = 0; i < grid.length; i++) {
		grid[i].classList.add('animate__animated', 'animate__fadeOut');
	}
	setTimeout(() => {
		for (let i = 0; i < guruEl.length; i++) {
			let el = document.querySelectorAll('.card:not(.guru)');
			for (let j = 0; j < el.length; j++) {
				el[j].style.display = 'none';
			}
			guruEl[i].style.display = 'flex';
			guruEl[i].classList.remove('animate__fadeOut');
			guruEl[i].classList.add('animate__fadeIn');
		}
	}, timing);
});

const test = [];
clear.addEventListener('click', () => {
	getTiming();
	for (let i = 0; i < grid.length; i++) {
		if (grid[i].style.display == 'none') {
			test.push(false);
		} else {
			test.push(true);
		}
	}
	if (test.includes(false)) {
		for (let i = 0; i < filterArray.length; i++) {
			const element = filterArray[i];
			element.style.setProperty('--lightness', '80%');
		}
		for (let i = 0; i < grid.length; i++) {
			grid[i].classList.remove('animate__fadeIn');
			grid[i].classList.add('animate__fadeOut');
			setTimeout(() => {
				grid[i].classList.remove('animate__fadeOut');
				grid[i].style.display = 'flex';
				grid[i].classList.add('animate__fadeIn');
			}, timing);
		}
	}
});

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	document.querySelector('[type="image/x-icon"]').setAttribute('href', './logo-white.svg');
	console.log('dark');
} else {
	document.querySelector('[type="image/x-icon"]').setAttribute('href', './logo-black.svg');
}

// Again, this is here because github pages is being a pain.
