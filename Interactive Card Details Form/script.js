if (window.innerWidth < 950) {
	document
		.querySelector('#bg')
		.setAttribute('src', './images/bg-main-mobile.png');
}

//Reset all the fields in the form
document.querySelectorAll('[type="text]');
for (var i = 0; i < document.querySelectorAll('[type="text"]').length; i++) {
	document.querySelectorAll('[type="text"]')[i].value = '';
}

// Variables
const CardNo = document.getElementById('number');
const CardName = document.getElementById('name');
const CardExp = document.getElementById('expiry');
const CardCvv = document.getElementById('cvv');
const CardM = document.getElementById('m');
const CardY = document.getElementById('y');

const inpCardName = document.getElementById('CardholderName');
const inpCardNo = document.getElementById('CardholderNumber');
const inpCardM = document.getElementById('CardExpiryM');
const inpCardY = document.getElementById('CardExpiryY');
const inpCVC = document.getElementById('CardCVC');

const errCardholderName = document.getElementById('errCardholderName');
const errCardholderNumber = document.getElementById('errCardholderNumber');
const errCardExpiryM = document.getElementById('errCardExpiryM');
const errCardCVC = document.getElementById('errCardCVC');

const submitButton = document.getElementById('submit');

const arr = [];

function matchDigits(input) {
	return input.value.match(/[\d]/gm);
}
// Card Updaters
inpCardName.addEventListener('input', () => {
	if (inpCardName.value == '') {
		inpCardName.style.border = '1px solid var(--red-input-errors)';
		errCardholderName.innerHTML = "Can't be blank";
	} else {
		inpCardName.style.border = '1px solid var(--c-light-grayish-violet)';
		errCardholderName.innerHTML = '';
	}
	if (inpCardName.value !== '') {
		CardName.innerHTML = inpCardName.value;
	} else {
		CardName.innerHTML = 'jane appleseed';
	}
});

inpCardNo.addEventListener('input', () => {
	if (inpCardNo.value == '') {
		inpCardNo.style.border = '1px solid var(--red-input-errors)';
		errCardholderNumber.innerHTML = "Can't be blank";
	} else if (!inpCardNo.value.match(/^[\d\s]+$/gm)) {
		inpCardNo.style.border = '1px solid var(--red-input-errors)';
		errCardholderNumber.innerHTML = 'Wrong format, numbers only';
	} else if (inpCardNo.value.length !== 19) {
		inpCardNo.style.border = '1px solid var(--red-input-errors)';
		errCardholderNumber.innerHTML = 'Wrong format, 16 digits only';
	} else {
		inpCardNo.style.border = '1px solid var(--c-light-grayish-violet)';
		errCardholderNumber.innerHTML = '';
	}

	let length = inpCardNo.value.length;
	if (length == 4) {
		inpCardNo.value = inpCardNo.value + ' ';
	}
	if (length == 9) {
		inpCardNo.value = inpCardNo.value + ' ';
	}
	if (length == 14) {
		inpCardNo.value = inpCardNo.value + ' ';
	}

	if (inpCardNo.value !== '') {
		CardNo.innerHTML = inpCardNo.value;
	} else {
		CardNo.innerHTML = '0000 0000 0000 0000';
	}
});

inpCardM.addEventListener('input', () => {
	if (inpCardM.value == '') {
		inpCardM.style.border = '1px solid var(--red-input-errors)';
		errCardExpiryM.innerHTML = "Can't be blank";
	} else if (!matchDigits(inpCardM)) {
		inpCardM.style.border = '1px solid var(--red-input-errors)';
		errCardExpiryM.innerHTML = 'Numbers only';
	} else if (inpCardM.value > '12') {
		inpCardM.style.border = '1px solid var(--red-input-errors)';
		errCardExpiryM.innerHTML = 'Number must be less than 13';
	} else {
		inpCardM.style.border = '1px solid var(--c-light-grayish-violet)';
		errCardExpiryM.innerHTML = '';
	}
	if (inpCardM.value !== '') {
		CardM.innerHTML = inpCardM.value;
	} else {
		CardM.innerHTML = '00';
	}
});

inpCardY.addEventListener('input', () => {
	if (inpCardY.value == '') {
		inpCardY.style.border = '1px solid var(--red-input-errors)';
		errCardExpiryM.innerHTML = "Can't be blank";
	} else if (!matchDigits(inpCardY)) {
		inpCardY.style.border = '1px solid var(--red-input-errors)';
		errCardExpiryM.innerHTML = 'Numbers only';
	} else if (inpCardY.value < '21') {
		inpCardY.style.border = '1px solid var(--red-input-errors)';
		errCardExpiryM.innerHTML = 'Number must be larger than 21';
	} else {
		inpCardY.style.border = '1px solid var(--c-light-grayish-violet)';
		errCardExpiryM.innerHTML = '';
	}

	if (inpCardY.value !== '') {
		CardY.innerHTML = inpCardY.value;
	} else {
		CardY.innerHTML = '00';
	}
});

inpCVC.addEventListener('input', () => {
	if (inpCVC.value.includes(' ')) {
		inpCVC.style.border = '1px solid var(--red-input-errors)';
		errCardCVC.innerHTML = 'CVC can not contain spaces';
	} else if (inpCVC.value == '') {
		inpCVC.style.border = '1px solid var(--red-input-errors)';
		errCardCVC.innerHTML = "Can't be blank";
	} else if (!matchDigits(inpCVC)) {
		inpCVC.style.border = '1px solid var(--red-input-errors)';
		errCardCVC.innerHTML = 'Numbers only';
	} else {
		inpCVC.style.border = '1px solid var(--c-light-grayish-violet)';
		errCardCVC.innerHTML = '';
	}

	if (inpCVC.value !== '') {
		CardCvv.innerHTML = inpCVC.value;
	} else {
		CardCvv.innerHTML = '000';
	}
});

submitButton.addEventListener('click', (e) => {
	e.preventDefault();

	if (inpCardName.value == '') {
		inpCardName.style.border = '1px solid var(--red-input-errors)';
		errCardholderName.innerHTML = "Can't be blank";
	} else {
		inpCardName.style.border = '1px solid var(--c-light-grayish-violet)';
		errCardholderName.innerHTML = '';
	}

	if (inpCardNo.value == '') {
		inpCardNo.style.border = '1px solid var(--red-input-errors)';
		errCardholderNumber.innerHTML = "Can't be blank";
	} else if (!inpCardNo.value.match(/^[\d\s]+$/gm)) {
		inpCardNo.style.border = '1px solid var(--red-input-errors)';
		errCardholderNumber.innerHTML = 'Wrong format, numbers only';
	} else if (inpCardNo.value.length !== 19) {
		inpCardNo.style.border = '1px solid var(--red-input-errors)';
		errCardholderNumber.innerHTML = 'Wrong format, 16 digits only';
	} else {
		inpCardNo.style.border = '1px solid var(--c-light-grayish-violet)';
		errCardholderNumber.innerHTML = '';
	}

	if (inpCardM.value == '') {
		inpCardM.style.border = '1px solid var(--red-input-errors)';
		errCardExpiryM.innerHTML = "Can't be blank";
	} else if (!matchDigits(inpCardM)) {
		inpCardM.style.border = '1px solid var(--red-input-errors)';
		errCardExpiryM.innerHTML = 'Numbers only';
	} else if (inpCardM.value > '12') {
		inpCardM.style.border = '1px solid var(--red-input-errors)';
		errCardExpiryM.innerHTML = 'Number must be less than 13';
	} else {
		inpCardM.style.border = '1px solid var(--c-light-grayish-violet)';
		errCardExpiryM.innerHTML = '';
	}

	if (inpCardY.value == '') {
		inpCardY.style.border = '1px solid var(--red-input-errors)';
		errCardExpiryM.innerHTML = "Can't be blank";
	} else if (!matchDigits(inpCardY)) {
		inpCardY.style.border = '1px solid var(--red-input-errors)';
		errCardExpiryM.innerHTML = 'Numbers only';
	} else if (inpCardY.value < '21') {
		inpCardY.style.border = '1px solid var(--red-input-errors)';
		errCardExpiryM.innerHTML = 'Number must be larger than 21';
	} else {
		inpCardY.style.border = '1px solid var(--c-light-grayish-violet)';
		errCardExpiryM.innerHTML = '';
	}

	if (inpCVC.value.includes(' ')) {
		inpCVC.style.border = '1px solid var(--red-input-errors)';
		errCardCVC.innerHTML = 'CVC can not contain spaces';
	} else if (inpCVC.value == '') {
		inpCVC.style.border = '1px solid var(--red-input-errors)';
		errCardCVC.innerHTML = "Can't be blank";
	} else if (!matchDigits(inpCVC)) {
		inpCVC.style.border = '1px solid var(--red-input-errors)';
		errCardCVC.innerHTML = 'Numbers only';
	} else {
		inpCVC.style.border = '1px solid var(--c-light-grayish-violet)';
		errCardCVC.innerHTML = '';
	}
	validate('.error');
	if (validated == false) {
		console.log('false');
	} else {
		console.log('validated');
		document.querySelector('#cardForm').style.display = 'none';
		document.querySelector('#validated').style.display = 'flex';
	}
	// Validate card
});
let validated;
function validate(style) {
	el = document.querySelectorAll(style);
	for (let i = 0; i < el.length; i++) {
		if (el[i].innerHTML === '') {
			arr.push('true');
		} else {
			arr.push('false');
		}
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'false') {
			validated = false;
		} else {
			validated = true;
		}
	}
}

//Requirements
// Name contains something
// card no. is equal to or above 16 digits
// month contains 2 digits
// year contains 2 digits
// CVV below or equal to 4 digits
