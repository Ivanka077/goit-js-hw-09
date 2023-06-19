import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateTimePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector("button[data-start]");
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

let selectedDate; 
let countdownIntervalId;

startButton.addEventListener("click", startCountdown);
const NOTIFICATION_DELAY = 1000;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0]; 
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      window.alert("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(dateTimePicker, options);

function startCountdown() {
  const currentDate = new Date();

  if (!selectedDate || selectedDate <= currentDate) {
    window.alert("Please choose a date in the future");
    return;
  }

  startButton.disabled = true;

  if (countdownIntervalId) {
    clearInterval(countdownIntervalId); 
  }

  countdownIntervalId = setInterval(updateCountdown, NOTIFICATION_DELAY);
}

function updateCountdown() {
  const timeRemaining = selectedDate.getTime() - Date.now();

  if (timeRemaining <= 0) {
    clearInterval(countdownIntervalId);
    updateTimerDisplay(0, 0, 0, 0);
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeRemaining);
  updateTimerDisplay(days, hours, minutes, seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function updateTimerDisplay(days, hours, minutes, seconds) {
  daysElement.textContent = addLeadingZero(days);
  hoursElement.textContent = addLeadingZero(hours);
  minutesElement.textContent = addLeadingZero(minutes);
  secondsElement.textContent = addLeadingZero(seconds);
}


    
