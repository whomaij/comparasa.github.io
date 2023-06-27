window.onload = function() {

	/*Container Principal*/
	mainContainer = document.getElementsByClassName('container')[0];

	/*DIV do alerta principal*/
	divAlertGay = document.getElementsByClassName('alert-gay')[0];

	/*Botão para fechar o alerta*/
	buttonCloseAlert = document.getElementsByClassName('closeAlert')[0];
	
	/*Array dos botoes*/
	buttonsIsGay = document.getElementsByName('isgay');

	buttonCloseAlert.addEventListener('click', esconderAlerta);
	for (i in buttonsIsGay) {
		buttonsIsGay[i].addEventListener('click', mostrarAlerta);
	}

}

function mostrarAlerta(event) {
	divAlertGay.style.display = 'block';
	divAlertGay.style.position = 'fixed';
}

function esconderAlerta(event){
	divAlertGay.style.display = 'none';
	divAlertGay.style.transition = '1s';
}