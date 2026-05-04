//숫자(시간)가 들어갈 자리를 변수라는 주머니에 담는다.
const hourE1 = document.getElementById('hour');
const minuteE1 = document.getElementById('minutes');
const secondE1 = document.getElementById('seconds');
const ampmE1 = document.getElementById('ampm');

function updateClock() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampm = 'AM';

  if (h >= 12) {
    ampm = 'PM';
    if (h > 12) h = h - 12;
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hourE1.innerText = h;
  minuteE1.innerText = m;
  secondE1.innerText = s;
  ampmE1.innerText = ampm;

  setTimeout(updateClock, 1000);
}

// 처음 실행
updateClock();

// 1000 = 1초
