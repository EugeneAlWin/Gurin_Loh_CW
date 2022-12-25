// fields
const dialog = document.getElementById('dialog_window');
const borderWidth =
  (dialog.getBoundingClientRect().width - dialog.clientWidth) / 2;
const togglerWidth = document.getElementsByClassName('toggler')[0].offsetWidth;
const dialogOffset = dialog.offsetWidth - (borderWidth + togglerWidth);
const togglerTextContainer = [
  ...document.getElementsByClassName('toggler_text'),
];
const input = document.getElementById('input_text');
const inputButton = document.getElementById('input_button');
const inputButtonMicro = document.getElementById('input_button_micro');
const togglers = [...document.getElementsByClassName('toggler')];
const historyContainer = document.getElementById('history_container');
const fullImageContainer = document.getElementById('full-image');
let isModalOpen = false;
//listeners
document.addEventListener('DOMContentLoaded', () => {
  dialog.style = `margin-left: ${-dialogOffset}px`;
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

addEventListener('keydown', (e) => {
  if (e.key == 'Enter') askAndGetAnswer(input.value);
});
inputButton.addEventListener('click', () => askAndGetAnswer(input.value));
inputButtonMicro.addEventListener('click', recognizeAndAsk);

togglers.forEach((i) => {
  i.addEventListener('click', () => {
    isModalOpen = !isModalOpen;
    dialog.style = `margin-left: ${
      isModalOpen ? borderWidth : -dialogOffset
    }px`;
    togglerTextContainer.forEach(
      (i) => (i.innerText = isModalOpen ? '<' : '>')
    );
  });
});
fullImageContainer?.addEventListener('click', (e) => {
  if (e.target.alt == 'someImg') return;
  fullImageContainer.style = 'display: none';
});

//funcs
function askAndGetAnswer(question = '') {
  if (question == '') return;
  const answer = getAnswer(question);
  historyContainer.innerHTML += `
  <div class="question_container">
    <div class="question">${question}</div>
  </div>`;
  historyContainer.scrollTop = historyContainer.scrollHeight;
  setTimeout(() => {
    historyContainer.innerHTML += `
    <div class="answer_container">
    <div class="answer">${answer}</div>
    </div>`;
    let synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(answer);
    utterance.rate = 1.8;
    synth.speak(utterance);
    historyContainer.scrollTop = historyContainer.scrollHeight;
  }, 600);
  input.value = '';
}

function recognizeAndAsk() {
  let recognizer = new webkitSpeechRecognition();
  recognizer.interimResults = true;
  recognizer.lang = 'ru-Ru';

  recognizer.onresult = function (event) {
    let result = event.results[event.resultIndex];
    if (result.isFinal) {
      askAndGetAnswer(result[0].transcript);
    }
  };
  recognizer.start();
}

//trash
const knowledge = [
  [
    'Электрон',
    'представляет',
    ' собой субатомную частицу, чей электрический заряд отрицателен и равен по модулю одному элементарному электрическому заряду.',
  ],
  ['Заряд электрона', 'равен', '-1.60217663 × 10^-19 Кулона'],
  [
    'Температурный коэффициент электрического сопротивления',
    'это',
    'величина, равная относительному изменению электрического сопротивления участка электрической цепи или удельного сопротивления вещества при изменении температуры на единицу.',
  ],
  ['Горелка', 'выглядит', 'так'],
  ['Стойка', 'выглядит', 'так'],
  ['Проводник', 'выглядит', 'так'],
  ['Омметр', 'выглядит', 'так'],
  ['Термометр', 'выглядит', 'так'],
  [
    'Проводником',
    'является',
    'вещество, среда, материал, хорошо проводящие электрический ток.',
  ],
  [
    'Диэлектриком',
    'является',
    'вещество, относительно плохо проводящее электрический ток.',
  ],
  [
    'Полупроводником',
    'является',
    'материал, по удельной проводимости занимающий промежуточное место между проводниками и диэлектриками, и отличающийся от проводников сильной зависимостью удельной проводимости от концентрации примесей, температуры и воздействия различных видов излучения.',
  ],
  [
    'Газовая горелка',
    'это',
    'устройство, которое создает контролируемое пламя путем смешивания горючего газа, такого как ацетилен, природный газ или пропан, с окислителем, таким как окружающий воздух или подаваемый кислород, и обеспечивающее воспламенение и горение.',
  ],
  [
    'Омметром',
    'является',
    'измерительный прибор непосредственного отсчёта для определения электрических активных сопротивлений.',
  ],
  [
    'Сопротивление',
    'измеряется',
    'в омах, для международного обозначения которых используется греческая буква омега (Ω).',
  ],
  [
    'Удельным сопротивлением',
    'называется',
    'скалярная физическая величина, численно равная сопротивлению однородного цилиндрического проводника единичной длины и единичной площади поперечного сечения.',
  ],
  ['Удельное сопротивление', 'измеряется', 'в Ом*м'],
  [
    'Температурный коэффициент электрического сопротивления',
    'измеряется',
    'в кельвинах в минус первой степени (K^−1)',
  ],
  ['Формула электрического сопротивления', 'выглядит', 'так'],
  ['Формула удельного сопротивления', 'выглядит', 'так'],
  ['Формула температурного сопротивления', 'выглядит', 'так'],
  [
    'Длина',
    'есть',
    'физическая величина, числовая характеристика протяжённости линий.',
  ],
  [
    'Площадью',
    'является',
    'часть плоскости, заключённой внутри замкнутой геометрической фигуры.',
  ],
  [
    'Температура',
    'есть',
    'скалярная физическая величина, характеризующая термодинамическую систему и количественно выражающая интуитивное понятие о различной степени нагретости тел.',
  ],
  [
    'Градусом Кельвина',
    'называется',
    'единица термодинамической температуры в Международной системе единиц, одна из семи основных единиц СИ',
  ],
  [
    'Уильям Кельвин',
    'это',
    'британский физик, механик и инженер. Известен своими работами в области термодинамики, механики, электродинамики.',
  ],
  ['Градус Кельвин в Цельсиях', 'равен', '272,15 Цельсия'],
  [
    'Градусом Цельсия',
    'называется',
    'широко распространённая единица температуры, применяемая в Международной системе единиц наряду с кельвином.',
  ],
  ['Градус Цельсия в Кельвинах', 'равен', '274,15 Градусов Кельвина'],
  [
    'Термометром',
    'является',
    'измерительный прибор для измерения температуры различных тел и сред.',
  ],
  [
    'Градусником',
    'является',
    'измерительный прибор для измерения температуры различных тел и сред.',
  ],
  [
    'Термометры',
    'бывают',
    'жидкостные, механические, газовые, электрические, оптические.',
  ],
  [
    'Омметры',
    'бывают',
    'мегаомметры, гигаомметры, тераомметры, миллиомметры, микроомметры, различающиеся диапазонами измеряемых сопротивлений.',
  ],
  ['График температурного сопротивления', 'выглядит', 'так'],
  [
    'Графиком',
    'называтеся',
    'диаграмма, изображающая при помощи кривых количественные показатели развития, состояния чего-н.',
  ],
  [
    'Нагревом',
    'называется',
    'искусственный либо естественный процесс повышения температуры материала/тела, либо за счёт внутренней энергии, либо за счёт подведения к нему энергии извне',
  ],
  [
    'Проводом',
    'является',
    'электротехническое изделие, служащее для соединения источника электрического тока с потребителем, компонентами электрической схемы.',
  ],
  [
    'Законом Ома',
    'называется',
    'эмпирический физический закон, определяющий связь электродвижущей силы источника с силой тока, протекающего в проводнике, и сопротивлением проводника.',
  ],
  ['Колесосо Ома', 'выглядит', 'вот так'],
  [
    'Кристаллической решёткой',
    'является',
    'вспомогательный геометрический образ, вводимый для анализа строения кристалла.',
  ],
  ['Пример кристаллической решетки', 'выглядит', 'вот так'],
  [
    'Неспаренный электрон',
    'представляет',
    'электрон, который занимает орбиталь атома по отдельности, а не как часть электронной пары.',
  ],
  [
    'Свободный электрон',
    'является',
    'электроном, который занимает орбиталь атома по отдельности, а не как часть электронной пары.',
  ],
  ['Автором работы', 'является', 'Гончаревич Евгений Витальевич'],
  ['Схема установки', 'выглядит', 'так'],
  ['Карта установки', 'выглядит', 'так'],
  ['Анимация работы установки', 'выглядит', 'так'],
  ['Симуляция работы установки', 'выглядит', 'так'],
  ['Термометр в работе', 'называется', 'Термометр-12.51'],
  ['Омметр в работе', 'называется', 'Омметр13-2'],
  [
    'Алюминий',
    'это',
    'химический элемент 13-й группы третьего периода периодической таблицы химических элементов Д. И. Менделеева, с атомным номером 13.',
  ],
  ['Алюминиевый проводник', 'выглядит', 'вот так'],
  [
    'Свинец',
    'это',
    'элемент 14-й группы, шестого периода периодической системы химических элементов Д. И. Менделеева, с атомным номером 82 и, таким образом, содержит магическое число протонов.',
  ],
  ['Свинецовый проводник', 'выглядит', 'вот так'],
  [
    'Железо',
    'это',
    'химический элемент 8-й группы четвёртого периода периодической системы химических элементов Д. И. Менделеева с атомным номером 26.',
  ],
  ['Железный проводник', 'выглядит', 'вот так'],
  [
    'Тепловым расширением',
    'является',
    'изменение линейных размеров и формы тела при изменении его температуры.',
  ],
  [
    'Термическое расширение',
    'есть',
    'изменение линейных размеров и формы тела при изменении его температуры.',
  ],
  ['Лабораторная установка', 'выглядит', 'вот так'],
  [
    'Лаборатоный опыт',
    'называется',
    'Зависимость электрической сопротивляемости металлов от температуры',
  ],
  [
    'Атомом',
    'называется',
    'частица вещества микроскопических размеров и массы, наименьшая часть химического элемента, являющаяся носителем его свойств.',
  ],
  [
    'Протоном',
    'называется',
    'одна из трёх элементарных частиц, из которых построено обычное вещество. Протоны входят в состав атомных ядер',
  ],
  ['Заряд протона', 'равен', '1,6022⋅10^−19 Кл.'],
  ['Теоретический материал', 'находится', 'здесь'],
  ['Структура установки', 'находится', 'здесь'],
  ['Симулятор установки', 'находится', 'здесь'],
  ['Контакты', 'находятся', 'здесь'],
  ['Главная страница', 'находится', 'здесь'],
  [
    'Электрическим сопротивлением проводника',
    'называется',
    'физическая величина, характеризующая свойство проводника препятствовать прохождению электрического тока.',
  ],

  [
    'Сутью лабораторного опыта',
    'является',
    'выявление зависимости сопротивления металлов от температуры.',
  ],
  ['Удельное сопротивление алюминия', 'равно', ''],
  ['Удельное сопротивление железа', 'равно', ''],
  ['Удельное сопротивление свинца', 'равно', ''],
  ['Температурный коэффициент алюминия', 'равен', ''],
  ['Температурный коэффициент железа', 'равен', ''],
  ['Температурный коэффициент свинца', 'равен', ''],
  ['Формула температурного коэффициента сопротивления', 'выражается', 'как'],
  ['Единицей измерения удельного сопротивления', 'является', 'Ом*м'],
  [
    'Резистором',
    'называется',
    'пассивный элемент электрических цепей, обладающий определённым или переменным значением электрического сопротивления, предназначенный для линейного преобразования силы тока в напряжение и напряжения в силу тока, ограничения тока, поглощения электрической энергии и др.',
  ],
  [
    'Электрическое напряжение',
    'есть',
    'разность потенциалов между двумя точками в электрическом поле. Это движущая сила для электрического заряда.',
  ],
  [
    'Напряжение между проводниками',
    'есть',
    'разность потенциалов между двумя точками в электрическом поле.',
  ],
  ['Электрический потенциал', 'измеряется', 'в Вольтах'],
  [
    'Разность потенциалов',
    'есть',
    'физическая скалярная величина, равная отношению работы, совершаемой силой поля при перемещении пробного заряда из начальной точки в конечную, к значению этого заряда',
  ],
  ['Формула напряжения', 'выглядит', 'так'],
  [
    'Алессандро Вольта',
    'это',
    'итальянский физик, химик и физиолог, один из основоположников учения об электричестве.',
  ],
  [
    'Сила тока',
    'есть',
    'скалярная физическая величина, равная отношению электрического заряда dQ, прошедшего через определённую поверхность за бесконечно малый промежуток времени dt, к длительности этого промежутка',
  ],
  [
    'Электрический ток',
    'есть',
    'направленное движение частиц или квазичастиц носителей электрического заряда.',
  ],
  [
    'Электротоком',
    'называется',
    'направленное движение частиц или квазичастиц носителей электрического заряда.',
  ],
  ['Сила электрического тока', 'измеряется', 'в Амперах'],
  ['Формула силы тока', 'выглядит', 'так'],
  [
    'Андре-Мари Ампер',
    'это',
    'французский физик, математик и естествоиспытатель.',
  ],
  ['Формула тока', 'выглядит', 'так'],
  ['Формула напряжения', 'выглядит', 'так'],
  [
    'Напряжённостью электрического поля',
    'называется',
    'векторная физическая величина, характеризующая электрическое поле в данной точке и равная отношению силы, действующей на неподвижный точечный заряд, помещённый в данную точку поля, к величине этого заряда q',
  ],
  [
    'Георг Симон Ом',
    'есть',
    'немецкий физик, который вывел теоретически и подтвердил на опыте закон, выражающий связь между силой тока в цепи, напряжением и сопротивлением.',
  ],
  [
    'Мощность тока',
    'есть',
    ' физическая величина, характеризующая скорость передачи или преобразования электрической энергии. Единицей измерения в Международной системе единиц является ватт.',
  ],
  ['Мощность электрического тока', 'измеряется', 'Ватт-ах (Вт)'],
  ['Формула мощности тока', 'выглядит', 'так'],
  [
    'Джеймс Уатт',
    '-',
    'шотландский инженер, изобретатель-механик. Ввёл первую единицу мощности — лошадиную силу. Его именем названа единица мощности — Ватт. Усовершенствовал паровую машину Ньюкомена. Создал универсальную паровую машину двойного действия.',
  ],
  ['Портрет Джеймса Уатта', 'представлен', 'здесь'],
  ['Портрет Георга Симона Ома', 'представлен', 'здесь'],
];
const endings = [
  ['ет', '(ет|ут|ют)'],
  ['ут', '(ет|ут|ют)'],
  ['ют', '(ет|ут|ют)'], //1 спряжение

  ['ит', '(ит|ат|ят)'],
  ['ат', '(ит|ат|ят)'],
  ['ят', '(ит|ат|ят)'], //2 спряжение

  ['ется', '(ет|ут|ют)ся'],
  ['утся', '(ет|ут|ют)ся'],
  ['ются', '(ет|ут|ют)ся'], //1 спряжение, возвратные

  ['ится', '(ит|ат|ят)ся'],
  ['атся', '(ит|ат|ят)ся'],
  ['ятся', '(ит|ат|ят)ся'], //2 спряжение, возвратные

  ['ен', 'ен'],
  ['ена', 'ена'],
  ['ено', 'ено'],
  ['ены', 'ены'],
  ['ан', 'ан'],
  ['ана', 'ана'],
  ['ано', 'ано'],
  ['аны', 'аны'],
  ['жен', 'жен'],
  ['жна', 'жна'],
  ['жно', 'жно'],
  ['жны', 'жны'], //краткие прилагательные
];
const blacklist = ['замена', 'замены', 'атрибут', 'маршрут', 'член', 'нет'];

function getEndingPosition(word) {
  if (blacklist.indexOf(word) !== -1) return -1;
  endings.forEach((item, j) => {
    if (word.substring(word.length - item[0].length) == item[0]) return j;
  });
  return -1;
}
const lowFirstChar = (str) => str[0].toLowerCase() + str.slice(1);
const upFirstChar = (str) => str[0].toUpperCase() + str.slice(1);

function getAnswer(question) {
  let result = false,
    answer = '',
    txt = lowFirstChar(question);

  //знаки препинания
  const separators = new RegExp('[*|\'|"|,|.|!|?|(|)|[|]|/]', 'g');
  let words = txt.replace(separators, '').split(' '),
    predicate = null;
  console.log(words);

  for (let i = 0; i < words.length; i++) {
    let endingPosition = getEndingPosition(words[i]);
    if (endingPosition >= 0) {
      let wordLength = words[i].length,
        endingLength = endings[endingPosition][0].length;
      words[i] =
        words[i].substring(0, wordLength - endingLength) +
        endings[endingPosition][1];

      predicate = new RegExp(words[i].toLowerCase());

      if (endings[endingPosition][0] == endings[endingPosition][1]) {
        predicate = new RegExp(
          `${words[i].toLowerCase()} ${words[i + 1].toLowerCase()}`
        );
      }
      i++;
    }

    let subject_string = words.slice(i + 1).join('.*');

    if (subject_string.length > 3) {
      let subject = new RegExp('.*' + subject_string.toLowerCase() + '.*');
      for (let j = 0; j < knowledge.length; j++) {
        const predicateTest = predicate?.test(knowledge[j][1].toLowerCase()),
          subjectTest = subject.test(knowledge[j][0].toLowerCase()),
          subjectTest2 = subject.test(knowledge[j][2].toLowerCase());
        if (predicateTest && (subjectTest || subjectTest2)) {
          answer += upFirstChar(
            `${knowledge[j][0]} ${knowledge[j][1]} ${knowledge[j][2]}\n`
          );
          result = true;
        }
      }

      if (!result) {
        for (let j = 0; j < knowledge.length; j++) {
          const subjectTest = subject.test(knowledge[j][0].toLowerCase()),
            subjectTest2 = subject.test(knowledge[j][2].toLowerCase());

          if (subjectTest || subjectTest2) {
            answer += upFirstChar(
              `${knowledge[j][0]} ${knowledge[j][1]} ${knowledge[j][2]}\n`
            );
            result = true;
          }
        }
      }
    }
  }
  if (!result) answer = 'Ответ не найден. <br/>';
  return answer.split('\n')[0];
}
