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
function getEnding(word) {
  //проверка слова на совпадение по черному списку в массиве blacklist

  if (blacklist.indexOf(word) !== -1) return -1;
  //перебор псевдоокончаний в массиве endings

  for (var j = 0; j < endings.length; j++) {
    //проверка, оканчивается ли слово word на j-ое псевдоокончание

    if (word.substring(word.length - endings[j][0].length) == endings[j][0])
      //возврат номера найденного псевдоокончания для сказуемого

      return j;
  }

  //если совпадений нет, то возврат -1

  return -1;
}
function lowFirstChar(str) {
  return str.substring(0, 1).toLowerCase() + str.substring(1);
}

function upFirstChar(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

export function getAnswer(question) {
  //флаг, найден ли ответ на вопрос
  var result = false;

  //формируемый функцией ответ на вопрос – вначале пустой
  var answer = '';
  //преобразование текста из параметра функции question функцией small1()
  //чтобы сделать первую букву в тексте вопроса прописной
  var txt = lowFirstChar(question);

  //знаки препинания
  var separators = new RegExp('[*|\'|"|,|.|!|?|(|)|[|]|/]', 'g');
  //replace all separators with space
  txt = txt.replace(separators, ' ' + '$&');

  var words = txt.split(' ');
  for (var i = 0; i < words.length; i++) {
    //поиск номера псевдоокончания с использованием вспомогательной функции  getEnding() запись его в переменную ending

    var ending = getEnding(words[i]);
    if (ending >= 0) {
      //замена псевдоокончания на набор возможных окончаний, хранящихся //во втором столбце массива

      words[i] =
        words[i].substring(0, words[i].length - endings[ending][0].length) +
        endings[ending][1];
      var predicate = new RegExp(words[i].toLowerCase());
      if (endings[ending][0] == endings[ending][1]) {
        predicate = new RegExp(
          words[i].toLowerCase() + ' ' + words[i + 1].toLowerCase()
        );
      }
      i++;
    }
    var subject_string = words.slice(i + 1).join('.*');
    //только если в подлежащем больше трех символов
    if (subject_string.length > 3) {
      var subject = new RegExp('.*' + subject_string.toLowerCase() + '.*');
      for (var j = 0; j < knowledge.length; j++) {
        if (
          predicate?.test(knowledge[j][1].toLowerCase()) &&
          (subject.test(knowledge[j][0].toLowerCase()) ||
            subject.test(knowledge[j][2].toLowerCase()))
        ) {
          //создание простого предложения из семантической связи

          answer += upFirstChar(
            knowledge[j][0] +
              ' ' +
              knowledge[j][1] +
              ' ' +
              knowledge[j][2] +
              '\n'
          );
          result = true;
        }
      }
      if (result == false) {
        //поиск совпадений только с шаблоном подлежащего
        for (var j = 0; j < knowledge.length; j++) {
          if (
            subject.test(knowledge[j][0].toLowerCase()) ||
            subject.test(knowledge[j][2].toLowerCase())
          ) {
            //создание простого предложения из семантической связи
            answer += upFirstChar(
              knowledge[j][0] +
                ' ' +
                knowledge[j][1] +
                ' ' +
                knowledge[j][2] +
                '\n'
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
