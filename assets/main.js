console.log(document.all);


const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

const usernameError = document.querySelector('#usernameError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const password2Error = document.querySelector('#password2Error');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
	// e.preventDefault();

	if(username.value == '' || username.value == null){
		e.preventDefault();
		usernameError.innerHTML = 'Username Required';

		setTimeout(() => usernameError.remove(), 3000);
		console.log('User Unsucced');
	} else {
		console.log('User Succed');
	}

	if(email.value == '' || email.value == null){
		e.preventDefault();
		emailError.innerHTML = 'Email Required';

		setTimeout(() => emailError.remove(), 3000);
		console.log('Email Unsucced');
	} else {
		console.log('Email Succed');
	}

	if(password.value == null || password.value ==''){
		e.preventDefault();
		passwordError.innerHTML = 'Password Required';
		setTimeout(() => passwordError.remove(), 3000);
		console.log('Password Unsucced');
	}else if(password.length  < 8 ){
		e.preventDefault();
		passwordError.innerHTML = 'Enter a combimation of atleast 8 numbers,letters.';
		setTimeout(() => passwordError.remove(), 3000);
		console.log('Password Unsucced');
	} else {
		console.log('Password Succed');
	}

	if(password2.value == null){
		e.preventDefault();
		password2Error.innerHTML = 'Re-enter Password';
		setTimeout(() => password2Error.remove(), 3000);
	}else if(password2.value != password.value){
		e.preventDefault();
		password2Error.innerHTML= 'Wrong Password.';
		setTimeout(() => password2Error.remove(), 3000);
	}
}