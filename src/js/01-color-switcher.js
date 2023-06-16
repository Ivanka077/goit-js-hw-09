const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');


const NOTIFICATION_DELAY = 1000;
let intervalId = null;

startBtn.addEventListener('click', startChangingBodyColor);
stopBtn.addEventListener('click', stopChangingBodyColor);

function startChangingBodyColor() {
  startBtn.disabled = true;
  intervalId = setInterval(() => {
    changeBodyColor(); 
  }, NOTIFICATION_DELAY);
}

function changeBodyColor() {  
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
}

function stopChangingBodyColor() {
  startBtn.disabled = false;
  clearInterval(intervalId);
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
