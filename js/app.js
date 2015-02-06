$(function(){

	var boxes = $('.box');

	boxes.on('mousedown', function(){
		$(this).addClass('color');
	});

	boxes.on('mouseleave', function(){
		$(this).removeClass('color');
	});

});



var boxes = document.querySelectorAll('.box');

for (var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener('click', function(){
		sound = document.getElementById(this.id + '_sound');
		sound.currentTime = 0;
		sound.play();
	});
}




