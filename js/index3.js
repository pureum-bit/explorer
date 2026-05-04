//폼으로 입력된 방식을 출력하는 방식--------------

const produchInput = document.querySelector('#product');
const checkMsg = document.querySelector('#check-msg');

produchInput.onchange = () => {
  const confirmedVlaue = produchInput.value;
  //onchange 이벤트는 엔터를 누르거나 Tab키를 눌러서 해당하는 입력란을 벗어날 때 발생한다.
  checkMsg.innerHTML = `확장된 내용 : ${confirmedVlaue}`;
};
