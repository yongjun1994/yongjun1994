document.getElementById('startBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const destination = document.getElementById('destination').value;
  const startDate = new Date(document.getElementById('startDate').value);
  const today = new Date();

  const diff = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));

  const ddayText = `안녕하세요 ${name}님! ${destination}까지 D-${diff}입니다!`;
  document.getElementById('dday-result').innerText = ddayText;

  showChecklist();
});

function showChecklist() {
  const items = ['여권', '충전기', '카메라', '옷', '우산'];
  const checklistEl = document.getElementById('checklist');
  checklistEl.innerHTML = '<h2>📋 준비물 체크리스트</h2>';

  items.forEach((item, idx) => {
    const id = `item-${idx}`;
    checklistEl.innerHTML += `
      <label>
        <input type="checkbox" id="${id}" />
        ${item}
      </label>`;
  });
}

document.getElementById('calcBudget').addEventListener('click', () => {
  const flight = Number(document.getElementById('flight').value);
  const hotel = Number(document.getElementById('hotel').value);
  const food = Number(document.getElementById('food').value);

  const total = flight + hotel + food;
  document.getElementById('budgetResult').innerText = `총 예상 비용: ${total.toLocaleString()}원`;
});