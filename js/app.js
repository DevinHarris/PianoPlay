$(function(){

	var boxes = $('.box');

	boxes.on('mousedown', function(){
		$(this).addClass('color');
	});

	boxes.on('mouseleave', function(){
		$(this).removeClass('color');
	});


});

var box1 = document.getElementById('box1');
var box1Note = document.getElementById('box1_sound');

/*box1.addEventListener('mousedown', function(){
	box1Note.currentTime = 0;
	box1Note.play();
}); */

var boxName = document.getElementsByClassName('box');
var notes = document.getElementsByName('notes');

for (var j = 0; j < notes.length; j++) {
	var notesVal = notes[j].name;
	console.log(notesVal);
}

for (var i = 0; i < boxName.length; i++) {
	boxName[i].addEventListener('mousedown', function(){
		var boxId = this.id;
		console.log(boxId);

	});
}
