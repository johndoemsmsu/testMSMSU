const db = [
	{
		email: 'admin@admin',
		password: 'admin',
	},
	{
		email: 'user@user',
		password: 'user',
	},
	{
		email: 'manager@manager',
		password: 'manager',
	}
]

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

	document.querySelector('form').addEventListener("submit", (event) => {	
		event.preventDefault();
		const email = document.getElementById("email").value;
		const password = document.querySelector("#textPassword").value;
		if (email === '' || password === '') {
			alert('Необходимо ввести email и пароль!');
		} else {
			const person = db.find(el => email === el.email);
			if (person) {
				if (person.password === password) {
					window.location.href = "success.html";
				} else {
					alert('Неверный пароль!');
				}
			} else {
				alert('Такого пользователя не существует!');
				document.querySelector('form').reset();
			}
		}
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
