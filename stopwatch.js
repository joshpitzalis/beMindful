'use strict'
$('.counter').hide()
$('.stop').hide()
var renderEvery10

function repeatRender(){
 		clearInterval(renderEvery10)
 		renderEvery10 = setInterval(render, 10)
 	}


function startTimer(timestamp) {
		var start = new Date().getTime()
		window.start = start
		repeatRender()
		$('.start').hide()
		$('.counter').show()
		$('.stop').show()
		return start
	}

function addLeadingZeros (string, length) {
		var string = string.toString();
		return string.length < length ? addLeadingZeros('0' + string, length) : string;
	}


function render () {
		var timeDiff= new Date().getTime() - start;
		var minutes = addLeadingZeros(Math.floor(timeDiff / (60 * 1000)), 2);
		var seconds = addLeadingZeros(Math.floor((timeDiff - minutes * 60 * 1000) / 1000), 2);
		var centiseconds = addLeadingZeros(Math.floor((timeDiff - minutes * 60 * 1000 - seconds * 1000) / 10),2);
		$('.counter').text(minutes + ':' + seconds);
	}

function stopTimer() {
			clearInterval(renderEvery10);

}
