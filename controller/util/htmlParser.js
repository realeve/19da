let util = require('./common')
let cheerio = require('cheerio')

// 获取行业、省份列表
let mainList = (html) => {
  let $ = cheerio.load(html);
  let options = $('.page3_A').map((i,option) => {
    let dom = $(option).find('li');
    return dom.map((i,item) => $(item).find('.page3_A-text').text().trim())
  })

  let title = $('.page3_Q').map((i,option)=>$(option).text().trim());

  let answers = $('.page3_A').map((i,option)=>{
    let dom = $(option).find('li').eq(0);
    return parseInt(dom.find('.page3_A-icon').eq(0).attr('answerright')) - 1;
  })
  return title.map((i,item)=>{
    let option = options[i];

    let obj = {
      title:item,
      answer:answers[i],
      optionA:option[0],
      optionB:option[1],
      optionC:option[2],
      optionD:''
    }; 
    if(option.length>3){
      obj.optionD = option[3]
    }
    return obj;
  })
};

module.exports = {
  mainList
}