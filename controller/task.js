let task = require('./task/index');
let word = require('./data/toWord');

async function init() {

  console.log('1.自动化任务队伍已开始,你可以定位到此处添加自己的任务');
  console.log('2.此处需添加任务的定时器，如 setInterval()\n');
  console.log('系统初始化：数据库表单初始化，载入默认数据。此处哪项任务未完成则请自行取消注释信息.');
  // task.init();
  word.init();
}

module.exports = {
  init
};