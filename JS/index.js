var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var emailInfo = document.getElementById('emailInfo');
var phoneNumber1 = document.getElementById('phoneNumber');
var error = document.getElementById('error');

function enviarFormulario(){
	console.log('Enviando formulario...');
	var mensajeError = [];

	if(firstName.value === null || firstName.value === ''){
		mensajeError.push('Ingresa tu nombre');
	}
	if(lastName.value === null || lastName.value === ''){
		mensajeError.push('Ingresa tu Apellido');
	}
	if(emailInfo.value === null || emailInfo.value === ''){
		mensajeError.push('Ingresa tu mail');
	}
	if(phoneNumber1.value === null || phoneNumber1.value === ''){
		mensajeError.push('Ingresa tu número de teléfono');
	}
	error.innerHTML = mensajeError.join(',');

	return false;
}