import { knowledge } from './data/knowledge.js';
import { endings } from './data/endings.js';
import { blacklist } from './data/blacklist.js';

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
  let result = false,
    answer = '',
    txt = lowFirstChar(question);

  //знаки препинания
  const separators = new RegExp('[*|\'|"|,|.|!|?|(|)|[|]|/]', 'g');
  let words = txt.replace(separators, ' ' + '$&').split(' '),
    predicate = null;

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
  console.log(answer);
}
