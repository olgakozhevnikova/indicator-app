'use strict';

$(() => {
	let balance;
	$.ajax({
		type: 'GET',
		url: 'http://alex.devel.softservice.org/testapi/',
		success: data => {
			balance = Object.values(data);
			$('#value').append(balance);
			let initialVal = balance*100/15; //a percentage of $14 out of $15
			$('.bar-step').css('left', initialVal + '%');
		}
	})

	let current_progress = 0;
	let interval = setInterval(() => {
		current_progress += 0.2*100/15; //a percentage of $0.2 out of $15
		$("#dynamic").css("width", current_progress + "%").attr("aria-valuenow", current_progress);
		if (current_progress >= 100) {
		  clearInterval(interval);
		  changeColor();
		}
	}, 2000);

	const changeColor = () => {
		$('#target').css('background', '#00A910');
		$('hr').css('border-bottom', '#fff');
		$('#reference').hide();
	}
});