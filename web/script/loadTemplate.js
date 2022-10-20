document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('head').innerHTML += `
   <meta charset="UTF-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   `;
  document.getElementById('nav').innerHTML = `
  <ul id="nav__ul">
        <li class="nav__li"><a href="./index.html">Главная страница</a></li>
        <li class="nav__li">
          <a href="./theory.html">Теоретические сведения</a>
        </li>
        <li class="nav__li">
          <a href="./struct.html">Структура установки</a>
        </li>
        <li class="nav__li">
          <a href="./simulator.html">Симулятор установки</a>
        </li>
        <li class="nav__li"><a href="./contacts.html">Контакты</a></li>
      </ul>
      `;
});
if (document.getElementById('full-image')) {
  document.getElementById('full-image').addEventListener('click', (e) => {
    if (e.target.alt == 'someImg') return;
    document.getElementById('full-image').style = 'display: none';
  });
}
