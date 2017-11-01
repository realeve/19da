let question = require('./question.json');

function init() {
  let alpha = ['A', 'B', 'C', 'D'];
  let arr = question.map((item, idx) => {
    let title = `<br>${idx+1}.${item.title}<br>`;
    let answer = `答案：${alpha[item.answer[0]]}<br>`;
    let option = item.option.map((que, i) => `${alpha[i]}、${que}`).join('<br>');
    return title + answer + option;
  }).join('')
  console.log(arr);
}

module.exports = {
  init
};