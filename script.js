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

for (let i = 0; i < cards.length; i++) {
	const html = `
	<div style="animation-delay: ${i / 10}s;" onclick="window.open('${
		cards[i].url
	}')" class=" animate__animated animate__fadeIn ${cards[i].difficulty} card">
	${cards[i].name}
	</div>
	`;
	document.querySelector('.grid').insertAdjacentHTML('beforeend', html);
}

const newbie = document.getElementById('newbie');
const junior = document.getElementById('junior');
const intermediate = document.getElementById('intermediate');
const advanced = document.getElementById('advanced');
const guru = document.getElementById('guru');
const clear = document.getElementById('clear');
const grid = document.querySelector('.grid').children;

const newbieEl = document.querySelectorAll('.newbie');
const juniorEl = document.querySelectorAll('.junior');
const intermediateEl = document.querySelectorAll('.intermediate');
const advancedEl = document.querySelectorAll('.advanced');
const guruEl = document.querySelectorAll('.guru');

const lightness = '70%';

newbie.addEventListener('click', () => {
	newbie.style.setProperty('--lightness', lightness);
	for (let i = 0; i < grid.length; i++) {
		grid[i].classList.add('animate__animated', 'animate__fadeOut');
	}
	setTimeout(() => {
		for (let i = 0; i < newbieEl.length; i++) {
			document.querySelector('.card:not(.newbie)').style.display = 'none';
			newbieEl[i].style.display = 'flex';
			newbieEl[i].classList.remove('animate__fadeOut');
			newbieEl[i].classList.add('animate__fadeIn');
		}
	}, 1100);
});
junior.addEventListener('click', () => {
	junior.style.setProperty('--lightness', lightness);
	for (let i = 0; i < grid.length; i++) {
		grid[i].classList.add('animate__animated', 'animate__fadeOut');
	}
	setTimeout(() => {
		for (let i = 0; i < juniorEl.length; i++) {
			document.querySelector('.card:not(.junior)').style.display = 'none';
			juniorEl[i].style.display = 'flex';
			juniorEl[i].classList.remove('animate__fadeOut');
			juniorEl[i].classList.add('animate__fadeIn');
		}
	}, 1100);
});

intermediate.addEventListener('click', () => {
	intermediate.style.setProperty('--lightness', lightness);
	for (let i = 0; i < grid.length; i++) {
		grid[i].classList.add('animate__animated', 'animate__fadeOut');
	}
	setTimeout(() => {
		for (let i = 0; i < intermediateEl.length; i++) {
			document.querySelector('.card:not(.intermediate)').style.display =
				'none';
			intermediateEl[i].style.display = 'flex';
			intermediateEl[i].classList.remove('animate__fadeOut');
			intermediateEl[i].classList.add('animate__fadeIn');
		}
	}, 1100);
});
advanced.addEventListener('click', () => {
	advanced.style.setProperty('--lightness', lightness);
	for (let i = 0; i < grid.length; i++) {
		grid[i].classList.add('animate__animated', 'animate__fadeOut');
	}
	setTimeout(() => {
		for (let i = 0; i < advanced.length; i++) {
			document.querySelector('.card:not(.advanced)').style.display =
				'none';
			advancedEl[i].style.display = 'flex';
			advancedEl[i].classList.remove('animate__fadeOut');
			advancedEl[i].classList.add('animate__fadeIn');
		}
	}, 1100);
});
guru.addEventListener('click', () => {
	guru.style.setProperty('--lightness', lightness);
	for (let i = 0; i < grid.length; i++) {
		grid[i].classList.add('animate__animated', 'animate__fadeOut');
	}
	setTimeout(() => {
		for (let i = 0; i < guruEl.length; i++) {
			document.querySelector('.card:not(.guru)').style.display = 'none';
			guruEl[i].style.display = 'flex';
			guruEl[i].classList.remove('animate__fadeOut');
			guruEl[i].classList.add('animate__fadeIn');
		}
	}, 1100);
});

clear.addEventListener('click', () => {
	newbie.style.setProperty('--lightness', '80%');
	junior.style.setProperty('--lightness', '80%');
	intermediate.style.setProperty('--lightness', '80%');
	advanced.style.setProperty('--lightness', '80%');
	guru.style.setProperty('--lightness', '80%');
	for (let i = 0; i < grid.length; i++) {
		grid[i].classList.remove('animate__fadeIn');
		grid[i].classList.add('animate__fadeOut');
		setTimeout(() => {
			grid[i].classList.remove('animate__fadeOut');
			grid[i].style.display = 'flex';
			grid[i].classList.add('animate__fadeIn');
		}, 1100);
	}
});

// This comment is here because github pages is being dumb
