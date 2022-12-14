import { knowledge } from './knowledge.js';
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
var blacklist = ['замена', 'замены', 'атрибут', 'маршрут', 'член', 'нет'];
function getEndingPosition(word) {
  if (blacklist.indexOf(word) !== -1) return -1;
  endings.forEach((item, j) => {
    if (word.substring(word.length - item[0].length) == item[0]) return j;
  });
  return -1;
}
const lowFirstChar = (str) => str[0].toLowerCase() + str.slice(1);

const upFirstChar = (str) => str[0].toUpperCase() + str.slice(1);

export function getAnswer(question) {
  var result = false;
  var answer = '';

  var txt = lowFirstChar(question);

  //знаки препинания
  var separators = new RegExp('[*|\'|"|,|.|!|?|(|)|[|]|/]', 'g');
  var words = txt.replace(separators, ' ' + '$&').split(' ');

  for (var i = 0; i < words.length; i++) {
    //поиск номера псевдоокончания с использованием вспомогательной функции  getEnding() запись его в переменную ending
    var endingPosition = getEndingPosition(words[i]);
    if (endingPosition >= 0) {
      //замена псевдоокончания на набор возможных окончаний, хранящихся //во втором столбце массива
      let wordLength = words[i].length;
      let endingLength = endings[endingPosition][0].length;
      words[i] =
        words[i].substring(0, wordLength - endingLength) +
        endings[endingPosition][1];
      var predicate = new RegExp(words[i].toLowerCase());
      if (endings[endingPosition][0] == endings[endingPosition][1]) {
        predicate = new RegExp(
          `${words[i].toLowerCase()} ${words[i + 1].toLowerCase()}`
        );
      }
      i++;
    }
    var subject_string = words.slice(i + 1).join('.*');
    //только если в подлежащем больше трех символов
    if (subject_string.length > 3) {
      var subject = new RegExp('.*' + subject_string.toLowerCase() + '.*');
      for (var j = 0; j < knowledge.length; j++) {
        const predicateTest = predicate?.test(knowledge[j][1].toLowerCase()),
          subjectTest = subject.test(knowledge[j][0].toLowerCase()),
          subjectTest2 = subject.test(knowledge[j][2].toLowerCase());
        if (predicateTest && (subjectTest || subjectTest2)) {
          //создание простого предложения из семантической связи
          answer += upFirstChar(
            `${knowledge[j][0]} ${knowledge[j][1]} ${knowledge[j][2]}\n`
          );
          result = true;
        }
      }
      if (!result) {
        //поиск совпадений только с шаблоном подлежащего
        for (var j = 0; j < knowledge.length; j++) {
          const subjectTest = subject.test(knowledge[j][0].toLowerCase()),
            subjectTest2 = subject.test(knowledge[j][2].toLowerCase());
          if (subjectTest || subjectTest2) {
            //создание простого предложения из семантической связи
            answer += upFirstChar(
              `${knowledge[j][0]} ${knowledge[j][1]} ${knowledge[j][2]}\n`
            );
            result = true;
          }
        }
      }
    }
    //если ответа нет
  }
  if (!result) answer = 'Ответ не найден. <br/>';
  console.log(answer);
}
