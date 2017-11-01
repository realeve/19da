let querystring = require('querystring');
let axios = require('axios');

let util = require('../util/common');
let query = require('../../schema/mysql');

let parser = require('../util/htmlParser');

let sqlParser = require('../util/sqlParser');

async function init() {
   await main();
}

async function main(){
    let pages = 50;
    for(let i=0;i<pages;i++){
        console.log(`正在抓取第${i+1}/${pages}条数据`);
        await getData();
        console.log('数据获取完毕');
    }
}

async function getData(){
    let data = await fetchData();
    let sql = await sqlParser.questionList(data);
    await query(sql);
}

async function fetchData() {

    let url = 'https://19th5.rmlt.com.cn/index/19da';

    let option = {
        method: 'get',
        url,
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)' +
                    ' Chrome/60.0.3112.113 Safari/537.36'
        },
        timeout: 15000
    };

    let html = await axios(option)
        .then(res => res.data)
        .catch(async e => {
            console.log('数据抓取失败\n' + url);
            console.log(e.message);
        });
    return parser.mainList(html);
}

module.exports = {
    init
};