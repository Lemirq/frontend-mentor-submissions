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
	for (var i = 0; i < grid.length; i++) {
		grid[i].style.display = 'none';
	}
	for (let i = 0; i < newbieEl.length; i++) {
		newbieEl[i].style.display = 'flex';
	}
});
junior.addEventListener('click', () => {
	junior.style.setProperty('--lightness', lightness);
	for (var i = 0; i < grid.length; i++) {
		grid[i].style.display = 'none';
	}
	for (let i = 0; i < juniorEl.length; i++) {
		juniorEl[i].style.display = 'flex';
	}
});
intermediate.addEventListener('click', () => {
	intermediate.style.setProperty('--lightness', lightness);
	for (var i = 0; i < grid.length; i++) {
		grid[i].style.display = 'none';
	}
	for (let i = 0; i < intermediateEl.length; i++) {
		intermediateEl[i].style.display = 'flex';
	}
});
advanced.addEventListener('click', () => {
	advanced.style.setProperty('--lightness', lightness);
	for (var i = 0; i < grid.length; i++) {
		grid[i].style.display = 'none';
	}
	for (let i = 0; i < advancedEl.length; i++) {
		advancedEl[i].style.display = 'flex';
	}
});
guru.addEventListener('click', () => {
	guru.style.setProperty('--lightness', lightness);
	for (var i = 0; i < grid.length; i++) {
		grid[i].style.display = 'none';
	}
	for (let i = 0; i < guruEl.length; i++) {
		guruEl[i].style.display = 'flex';
	}
});

clear.addEventListener('click', () => {
	newbie.style.setProperty('--lightness', '80%');
	junior.style.setProperty('--lightness', '80%');
	intermediate.style.setProperty('--lightness', '80%');
	advanced.style.setProperty('--lightness', '80%');
	guru.style.setProperty('--lightness', '80%');
	for (let i = 0; i < grid.length; i++) {
		grid[i].style.display = '';
	}
});
