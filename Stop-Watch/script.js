window.onload = function () {
	const startBtn = document.getElementById('start');
	const stopBtn = document.getElementById('stop');
	const resetBtn = document.getElementById('reset');

	let seconds = 0;
	let tens = 0;
	let Interval;

	const changeTens = document.getElementById('tens');
	const changeSeconds = document.getElementById('seconds');

	startBtn.onclick = function () {
		clearInterval(Interval);
		Interval = setInterval(startTimer, 10);
	}

	stopBtn.onclick = function () {
		clearInterval(Interval);
	}

	resetBtn.onclick = function () {
		tens = 0;
		seconds = 0;
		changeTens.innerHTML = "00";
		changeSeconds.innerHTML = "00";
	}

	function startTimer() {
		tens++;

		if (tens <= 9) {
			changeTens.innerHTML = "0" + tens;
		}

		if (tens > 9) {
			changeTens.innerHTML = tens;
		}

		if (tens > 99) {
			seconds++;
			changeSeconds.innerHTML = "0" + seconds;
			tens = 0;
			changeTens.innerHTML = "0" + 0;
		}

		if (seconds > 9) {
			changeSeconds.innerHTML = seconds;
		}
	}

}