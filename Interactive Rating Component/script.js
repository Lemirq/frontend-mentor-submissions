const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');

var rated;

one.addEventListener('click', () => {
	var elements = document.getElementsByClassName('selected');

	for (var i = 0; i < elements.length; i++) {
		elements[i].classList.remove('selected');
	}
	one.classList.add('selected');
	rated = '1';
});
two.addEventListener('click', () => {
	var elements = document.getElementsByClassName('selected');

	for (var i = 0; i < elements.length; i++) {
		elements[i].classList.remove('selected');
	}
	two.classList.add('selected');
	rated = '2';
});
three.addEventListener('click', () => {
	var elements = document.getElementsByClassName('selected');

	for (var i = 0; i < elements.length; i++) {
		elements[i].classList.remove('selected');
	}
	three.classList.add('selected');
	rated = '3';
});
four.addEventListener('click', () => {
	var elements = document.getElementsByClassName('selected');

	for (var i = 0; i < elements.length; i++) {
		elements[i].classList.remove('selected');
	}
	four.classList.add('selected');
	rated = '4';
});
five.addEventListener('click', () => {
	var elements = document.getElementsByClassName('selected');

	for (var i = 0; i < elements.length; i++) {
		elements[i].classList.remove('selected');
	}
	five.classList.add('selected');
	rated = '5';
});

document.querySelector('.btn').addEventListener('click', () => {
	if (
		one.classList.contains('selected') ||
		two.classList.contains('selected') ||
		three.classList.contains('selected') ||
		four.classList.contains('selected') ||
		five.classList.contains('selected')
	) {
		document.getElementById('validation').style.display = 'flex';
		document.getElementById('card').style.display = 'none';
		document.querySelector('#rating').innerHTML = rated;
	} else {
		alert('Please select a rating!');
	}
});
