//프로필 기억하기----------------------------------
const nameInput = document.getElementById('name-input');
const msgInput = document.getElementById('msg-input');
const nameDisplay = document.getElementById('display-name');
const msgDisplay = document.getElementById('display-msg');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');

//웹브라우져로 접석하며 화면이 나타난다 > 페이지가 나타난다
//페이지가 로드(Load)될 때 저장된 이름 & 메세지가 있는가?

const savedName = localStorage.getItem('userName');
const savedMsg = localStorage.getItem('userMsg');
//이전에 없었던 것인데 어덯게 값이 들어가나?

if (!savedName) nameDisplay.innerText = savedName;
if (!savedMsg) msgDisplay.innerText = savedMsg;

//저장 버튼 클릭할 때
saveBtn.addEventListener('click', () => {
  const name = nameInput.value;
  const msg = msgInput.value;

  //로컬 스토리지 각각 저장
  localStorage.setItem('userName', name);
  localStorage.setItem('userMsg', msg);

  //화면 방영시키기
  nameDisplay.innerText = name;
  msgDisplay.innerText = msg;
});

//초기화 버튼 클릭할 때
clearBtn.addEventListener('click', () => {
  //삭제 작업
  localStorage.removeItem('userName');
  localStorage.removeItem('userMsg');
  // name = '';
  // msg = '';
  //화면 방영
  nameDisplay.innerText = '이름 없음';
  msgDisplay.innerText = '상태 메세지 입력';
  nameInput.value = '';
  msgInput.value = '';
});
