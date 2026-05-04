//다크 & 라이트 모드---------------------------------------

//준비작업 (작업대상)
const inputE1 = document.querySelector('.input');
const bodyE1 = document.querySelector('body');

//없는 값 (최초 값)
inputE1.checked = JSON.parse(localStorage.getItem('mode'));
//로컬 스토리지에는 모든 데이터가 '문자' 형태로 지정된다
//true또는False라는 문자가 저장되어 있다
//이 문자를 자바스크립트가 참 또는 거짓으로 인식하지 못하고, 순수한 문자로 인식한다
//자바스크립트 입장에서 참 또는 거짓으로 인지할 수 있도록 변환한다

function updateBody() {
  if (inputE1.checked) {
    bodyE1.classList.add('dark');
  } else {
    bodyE1.classList.remove('dark');
  }
}
//페이지가 처음 로드될 때 스위치 상태에 맞추어 화면을 그리는 단계

updateBody();

inputE1.addEventListener('input', () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem('mode', JSON.stringify(inputE1.checked));
}
