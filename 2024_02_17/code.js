document.addEventListener("DOMContentLoaded", () => {
	const eyeButtonClass = '.eyeClass';
	const eyeButton = document.querySelector(eyeButtonClass);
	const passwordTextField = document.querySelector('#textPassword');
	// const passwordTextField = document.getElementById('textPassword');
	eyeButton.addEventListener('click', () => {
		if (passwordTextField.type === 'password') {
			passwordTextField.type = 'text';
		} else {
			passwordTextField.type = 'password';
		}
	});
});

/*
function() {
}

() => {
}

function func () {
}

const func = () => {
}
*/
