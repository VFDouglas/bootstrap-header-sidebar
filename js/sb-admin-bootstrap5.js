'use strict';

// Configura tooltips para navegação lateral oculta
document.querySelectorAll('.navbar-sidenav [data-toggle="tooltip"]').forEach(element => {
	let tooltip = new bootstrap.Tooltip(element, {template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip" style="pointer-events: none;"><div class="arrow"></div><div class="tooltip-inner"></div></div>'});
});

// Alterna a navegação lateral
document.getElementById('sidenavToggler').addEventListener('click', function(event) {
	event.preventDefault();
	document.body.classList.toggle('sidenav-toggled');
	document.querySelectorAll('.navbar-sidenav .nav-link-collapse').forEach(element => {
		element.classList.add('collapsed');
	});
	document.querySelectorAll('.navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level').forEach(element => {
		element.classList.remove('show');
	});
})

// Força a classe habilitada a ser removida quando o link for clicado
document.querySelectorAll('.navbar-sidenav .nav-link-collapse').forEach(element => {
	element.addEventListener('click', function(event) {
		event.preventDefault();
		document.body.classList.remove('sidenav-toggled');
	});
});

// Previne a rolagem do conteúdo quando o mouse está sobre a barra de navegação lateral
document.querySelectorAll('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').forEach(element => {
	element.addEventListener('wheel', function(event) {
		let delta = event.wheelDelta || -event.detail;
		this.scrollTop += (delta < 0 ? 1 : -1) * 30;
		event.preventDefault();
	});
});

// Aparecimento do botão de rolagem para o topo
window.addEventListener('scroll', function(event) {
	let scroll_distance = this.scrollY;
	let back_to_top     = document.querySelector('.back_to_top');

	if (scroll_distance > 100) {
		back_to_top.classList.remove('hide');
	}
	else {
		back_to_top.classList.add('hide');
	}
});

document.getElementById('toggleNavPosition').addEventListener('click', function() {
	document.body.classList.toggle('fixed-nav');
	document.querySelector('nav').classList.toggle('fixed-top');
	document.querySelector('nav').classList.toggle('static-top');
});
document.getElementById('toggleNavColor').addEventListener('click', function() {
	document.querySelector('nav').classList.toggle('navbar-dark');
	document.querySelector('nav').classList.toggle('navbar-light');

	document.querySelector('nav').classList.toggle('bg-dark');
	document.querySelector('nav').classList.toggle('bg-light');

	document.body.classList.toggle('bg-dark');
	document.body.classList.toggle('bg-light');
});

// Habilitando todos os tooltips
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function(tooltip_trigger_element) {
	return new bootstrap.Tooltip(tooltip_trigger_element);
});
