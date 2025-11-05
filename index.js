const hr = document.getElementById('hour');
const mn = document.getElementById('min');
const sc = document.getElementById('sec');

function updateClock() {
  const now = new Date();
  const hh = now.getHours() * 30;
  const mm = now.getMinutes() * 6;
  const ss = now.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
