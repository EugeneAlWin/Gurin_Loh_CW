import { getAnswer } from './knowledgeBase.js';

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
  document.body.innerHTML +=
    "<div id='dialog' class='dialog' style='margin-left:0px;'>" +
    "<div class='label' onclick='toggleDialog()'>Задайте вопрос!</div>" +
    "<div class='header'>История:</div>" +
    "<div class='history' id='history'></div>" +
    '<div class="question"  ><input id="Qdialog" style=" color:black !important;" placeholder="Введите вопрос"  /><br>' +
    '<button id="bts" style=" color:black !important;">Получить ответ</button>';
  '</div>' + '</div>' + getAnswer('Что такое алюминий');
  document
    .getElementById('bts')
    .addEventListener('click', () => ask('Qdialog'));
  addEventListener('keydown', (e) => {
    if (e.key == 'Enter') ask('Qdialog');
  });
});
function ask(questionInput) {
  var question = document.getElementById(questionInput).value.trim();
  if (question == '') return;
  //выдвижение диалогового модуля
  //вывод вопроса
  //document.getElementById("history").innerHTML+="<div class='question'>"+question+"</div>";
  var newDiv = document.createElement('div');
  newDiv.className = 'question';
  newDiv.innerHTML = question;
  document.getElementById('history').appendChild(newDiv);
  //поиск и вывод ответа
  //document.getElementById("history").innerHTML+="<div class='answer'>"+getAnswer(question)+"</div>";
  //создаем блок <div>
  newDiv = document.createElement('div');
  //задаем класс оформления созданного блока
  newDiv.className = 'answer';
  //получаем ответ на вопрос и наполняем им созданный блок
  newDiv.innerHTML = getAnswer(question);
}
if (document.getElementById('full-image')) {
  document.getElementById('full-image').addEventListener('click', (e) => {
    if (e.target.alt == 'someImg') return;
    document.getElementById('full-image').style = 'display: none';
  });
}
