const timer = document.querySelector("#timer");
const mainButton = document.querySelector("#main-button");
const resetButton = document.querySelector("#reset-button");

const setTimer = (time) => (timer.textContent = formatTime(time));
const stopTimer = (timerInterval) => clearInterval(timerInterval);
const resetTimer = (duration) => setTimer(duration);
const toggleButton = (button) => {
	button.textContent === "Start" ? (button.textContent = "Stop") : (button.textContent = "Start");
};

let timerInterval;
let isPaused = false;

const formatTime = (time) => {
	const minutes = Math.floor(time / 60)
		.toString()
		.padStart(2, "0");
	const seconds = (time % 60).toString().padStart(2, "0");
	return `${minutes}:${seconds}`;
};

const startTimer = (currentTime, timerInterval) => {
	const updatedTimerInterval = setInterval(() => {
		currentTime--;
		setTimer(currentTime);
		if (currentTime === 0 || isPaused) clearInterval(timerInterval);
	}, 1000);
	return updatedTimerInterval;
};

mainButton.addEventListener("click", () => {
	resetButton.classList.toggle("hidden");
	timerInterval ? (timerInterval = stopTimer(timerInterval)) : (timerInterval = startTimer(1500, timerInterval));
	toggleButton(mainButton);
});

resetButton.addEventListener("click", () => {
	resetTimer(1500);
	isPaused = true;
});
