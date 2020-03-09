	const form = document.getElementById('form');
	const username = document.getElementById('username');
	const email = document.getElementById('email');
	const password = document.getElementById('password');
	const password2 = document.getElementById('password2');

	form.addEventListner('submit', (e) => {
		e.preventDefault();

		checkinputs();
	});

	function checkinputs(){
		//get the values form inputs;
		const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

        if(usernameValue === ''){
        	//show errorss
        	//add error class
        	setErrorFor(username,'Username cannot be blank');
        }	else {
        	//add success class
        	setSuccessFor(username);
        }
	}

	function setErrorFor(input,message){
		const formControl = input.ParentElement;
		const small = formControl.querySelector('small');

		//add error message inside small
		small.innerHtml = message;

		//add error class
		formControl.className = 'row form-group';
	}