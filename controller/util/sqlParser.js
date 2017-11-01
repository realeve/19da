let getNow = require('./common').getNow

function questionList(questions) {
    let sql = 'insert into question_list(title,answer,optionA,optionB,optionC,optionD) values ';
    let sqlValues = [];
    questions.map((i,item) => {
        let str = `('${item.title}','${item.answer}','${item.optionA}','${item.optionB}','${item.optionC}','${item.optionD}')`;
        sqlValues.push(str);
    })
    return sql + sqlValues.join(',');
}
module.exports = {
    questionList
}