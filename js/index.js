const h1 = document.querySelector('h1');
const name = document.querySelector('.name');
const img = document.querySelector('#profile img');
// const h1 = document.querySelector('#h1');

// h1.onclick = () => (h1.innerText = '프로필');
name.onclick = () => (name.innerText = '이름 : 김푸름');
// name.onclick = () => name.innerHTML =`이름 : <b>김푸름</b>`;
img.onclick = () => (img.src = './images/pf2.png');
// h1.onclick = () => {
//   h1.style.color = 'white';
//   h1.style.backgroundColor = 'black';
// };
h1.onclick = () => {
  h1.innerText = '프로필';
  Object.assign(h1.style, { color: 'white', backgroundColor: 'black' });
};
