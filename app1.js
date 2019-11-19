/*
The scripts for page "Використання діодів.Інтерактивна демонстрація двох напів-періодного випрямлення струму.html"
  Creared and edited by M.Yatsyn, 2019.
*/
//.
/*перший проект*/
$(document).ready(function init1() {
var voltage = 0;
var nframe = -1;
var slides = ["slide-1 animation-1", "slide-2 slide-1", "slide-3 slide-2",
			  "slide-4 slide-3", "slide-5 slide-4", "slide-6 slide-5",
			  "slide-7 slide-6", "slide-8 slide-7", "slide-9 slide-8",
			  "slide-10 slide-9", "slide-11 slide-10", "slide-12 slide-11"];

function btnClick(t, stop, togv, togc, add) {
	var $input = t.closest('div.quantity-1').find("input[name='number']");
	var value = parseInt($input.val());
	if (-value*add > -stop*add) {
		value = value + 10* add;
	} else {
		value = stop;
	}
	$input.val(value);
	$('div.slider').toggleClass(togc);
	if (value == 30) {
		//блокуємо кнопку плюса і розблоковуємо кнопку мінуса
		$('.plus-button').prop('disabled', true);
		$('.minus-button').prop('disabled', false);
	}
	if (value == -30) {
		//блокуємо кнопку мінуса і розблоковуємо кнопку плюса
		$('.plus-button').prop('disabled', false);
		$('.minus-button').prop('disabled', true);
	}
}

$('.minus-button').on('click', function(e) { //обробник події кліку для кнопки .minus-button
        e.preventDefault();
        voltage -= 10;
		if (nframe < slides.length-1) {
			nframe += 1;
			btnClick($(this), -30, voltage, slides[nframe], -1);
		}
});

$('.plus-button').on('click', function(e) { //обробник події кліку для кнопки .plus-button
		e.preventDefault();
		voltage += 10;
		if (nframe < slides.length-1) {
			nframe += 1;
			btnClick($(this), 30, voltage, slides[nframe], 1);
		}
});
});