const datePicker = document.getElementById('date-picker');
const days = document.getElementById('days');

function getDaysSince() {
	let thatDay = new Date(datePicker.value);
	let firstDate = thatDay.getFullYear() + '-' + (thatDay.getMonth() + 1) + '-' + thatDay.getDate();

	let today = new Date();
	let secondDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds

	return Math.round(Math.abs((new Date(firstDate).getTime() - new Date(secondDate).getTime()) / oneDay) - 1);
}

datePicker.addEventListener('change', () => {
	days.innerText = getDaysSince();
});

days.innerText = getDaysSince();