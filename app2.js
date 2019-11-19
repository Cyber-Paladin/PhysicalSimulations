/*
The scripts for page "Використання діодів.Інтерактивна демонстрація двох напів-періодного випрямлення струму.html"
  Creared and edited by M.Yatsyn, 2019.
*/
//.
/*другий проект*/
$(document).ready(function init2() {
var voltage = 0;
var nframe = -1;
var slides = ["slide-13 animation-2", "slide-14 slide-13", "slide-15 slide-14",
			  "slide-16 slide-15", "slide-17 slide-16", "slide-18 slide-17",
			   "slide-19 slide-18", "slide-20 slide-19", "slide-21 slide-20",
			   "slide-22 slide-21", "slide-23 slide-22", "slide-24 slide-23"];

function btnClick1(t, stop, togv, togc, add) {
	var $input = t.closest("div.quantity-2").find("input[name='number']");
	var value = parseInt($input.val());
	if (-value*add > -stop*add) {
		value = value + 10* add;
	} else {
		value = stop;
	}
	$input.val(value);
	if (value == togv) $('div.slider').toggleClass(togc);
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

$(".minus-button").on("click", function(e) { //обробник події кліку для кнопки .minus-button
        e.preventDefault();
        voltage -= 10;
        if (nframe < slides.length-1) {
        	nframe += 1;
			btnClick1($(this), -30, voltage, slides[nframe], -1);
        }
});

$(".plus-button").on("click", function(e) { //обробник події кліку для кнопки .plus-button
		e.preventDefault();
		voltage += 10;
		if (nframe < slides.length-1) {
			nframe += 1;
			btnClick1($(this), 30, voltage, slides[nframe], 1);
		}
});
});