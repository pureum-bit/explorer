//폼으로 입력된 여러방식을 출력하는 방식--------------
//rec의 값을 웹 브라우저에 표시하기

document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.forms['order'];

  orderForm.onsubmit = (e) => {
    e.preventDefault();

    const product = orderForm.product.value;
    const count = orderForm['prod-num'].value;
    const name = orderForm['order-name'].value;
    const tel = orderForm['order-tel'].value;
    const addr = orderForm['order-addr'].value;

    let resultArea = document.querySelector('#result-view');

    if (!resultArea) {
      resultArea = document.createElement('div');
      resultArea.id = 'result-view';
      orderForm.after(resultArea);
    }

    resultArea.innerHTML = `
    <hr>
    <h3>주문 내역</h3>
    <p>상품: ${product} / 수량: ${count}</p>
    <p>주문자: ${name} (${tel})</p>
    <p>주소: ${addr}</p>
    `;
  };
});
// const rec = document.order.product.value;
