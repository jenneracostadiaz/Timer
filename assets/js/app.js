document.addEventListener('DOMContentLoaded', function () {
	relojDigital();
	fechaActual();
});

let today = new Date();

const mes = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre',
];

const dias = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado',
];

const relojDigital = () => {
	today = new Date();
	let h = ceroAdelante(today.getHours());
	let m = ceroAdelante(today.getMinutes());
	let s = ceroAdelante(today.getSeconds());
	document.querySelector('#reloj-digital').innerHTML =
		h + ':' + m + ':' + s;
	setTimeout(relojDigital, 1000);
};

const ceroAdelante = (i) => {
	if (i <= 9) {
		i = '0' + i;
	}
	return i;
};

const fechaActual = () => {
	document.querySelector('#mi-fecha-actual').innerHTML =
		dias[today.getDay()] +
		', ' +
		mes[today.getMonth()] +
		' ' +
		today.getDate() +
		', ' +
		today.getFullYear();
};

const cuentaRegresiva = (fi, ff) => {
	let fachaCap = document.querySelector(fi).value;
	if (fachaCap) {
		let fechaCapturada = new Date(fachaCap);
		setInterval(() => {
			let fechaAhora = new Date();
			let tiempoRest = fechaCapturada - fechaAhora;
			let dias = Math.floor(tiempoRest / (1000 * 60 * 60 * 24));
			let horas = Math.floor(
				(tiempoRest % (1000 * 60 * 60 * 24)) /
					(1000 * 60 * 60)
			);
			let minutos = Math.floor(
				(tiempoRest % (1000 * 60 * 60)) / (1000 * 60)
			);
			let segundos = Math.floor(
				(tiempoRest % (1000 * 60)) / 1000
			);
			document.querySelector(ff).innerHTML = `
				<span class="cuenta-regresiva__timer-item">${dias}D</span>
				<span class="cuenta-regresiva__timer-item">${horas}H</span>
				<span class="cuenta-regresiva__timer-item">${minutos}m</span>
				<span class="cuenta-regresiva__timer-item">${segundos}s</span>
			`;
		}, 1000);
	} else {
		console.log('No hay fecha seleccionada');
	}
	return false;
};

/** Tabs */
const onTab = (id, e) => {
	let tabNavItemBtn = document.querySelectorAll(
		'.tab__nav-item-btn'
	);
	let tabContentItem = document.querySelectorAll(
		'.tab__content-item'
	);
	let tabID = document.querySelector(id);
	tabNavItemBtn.forEach((tab) => {
		tab.classList.remove('active');
	});
	e.classList.add('active');

	tabContentItem.forEach((tab) => {
		tab.classList.remove('active');
		tab.style.display = 'none';
	});
	tabID.classList.add('active');
	tabID.style.display = 'block';
};
