document.addEventListener("DOMContentLoaded", () => {
	const eyeButtonClass = '.eyeClass';
	const eyeButton = document.querySelector(eyeButtonClass);
	const passwordTextField = document.querySelector('#textPassword');
	// const passwordTextField = document.getElementById('textPassword');
	eyeButton && eyeButton.addEventListener('click', () => {
		if (passwordTextField.type === 'password') {
			passwordTextField.type = 'text';
		} else {
			passwordTextField.type = 'password';
		}
	});

	const checkbox = document.getElementById('checkbox');
	const checkboxBox = document.querySelector('.checkboxArrowWrapper');
	const checkboxImage = document.getElementById('checkboxImage');
	if (checkbox) {
		checkbox.addEventListener('click', () => {
			if (checkboxBox.classList.contains('checkboxArrowActive')) {
				checkboxBox.classList.remove('checkboxArrowActive');
				checkboxImage.style.display = 'none';
			} else {
				checkboxBox.classList.add('checkboxArrowActive');	
				checkboxImage.style.display = 'block';
			}
		});
	}

	const linkLabel = document.getElementById('linkLabel');
	
	linkLabel && linkLabel.addEventListener('click', () => {
		window.open("https://www.google.ru/", "_blank")
	})

	const successButton = document.getElementById('successButton');
	successButton && successButton.addEventListener('click', () => {
		setTimeout(() => window.location.href = "success.html", 1000);
	})
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
