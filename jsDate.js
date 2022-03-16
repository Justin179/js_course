/*
前端工程研究：關於 JavaScript 中 Date 型別的常見地雷與建議作法
https://blog.miniasp.com/post/2016/09/25/JavaScript-Date-usage-in-details

基本上我們在建立 Date 物件的時候，只有 4 種用法：

new Date();
new Date(value);
new Date(dateString); 
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);

*/

// basic ways to construct date obj
// var
// let & const 來取代 var
// 常數用const (constant)

// let d;
// let d = new Date();
// console.log(d);
// console.log(d.toString());

// console.log('--------------1--------------');

// d = new Date(1647435105201); // 1970年1月1日零點零分零秒 -> 至指定的毫秒
// console.log(d.toString());

// d = new Date(86400000); // 一天 = 86400000毫秒
// console.log(d.toString());

// console.log('--------------2--------------');

// let msec = new Date().getTime(); // 以毫秒型式取得目前的時間
// console.log(msec);

// d = new Date(msec);
// console.log(d);
// console.log(d.toString());




// console.log('--------');
// d = new Date("2019-08-02T11:30:00+08:00"); // 國際換日線+8小時

// console.log(d.toString());
// d = new Date("2019-08-02T11:30:00");
// console.log(d.toString());
// d = new Date();
// console.log(d.toString());


// let d = new Date(2019, 7, 2, 11, 30, 00, 0, 0); // 最後一個為毫秒
// console.log(d.toString());

// console.log(d.getFullYear());
// console.log(d.getMonth()); // 只有月會少1 (7 = 8月) -> get month index
// console.log(d.getDate());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());

console.log('--------');

let d = new Date();

// console.log(d.getUTCHours()); // 本初子午線的時間

// locale
console.log(d.toLocaleString("en-US")); // 各地區的習慣 時間表示方式
console.log(d.toLocaleString("zh-TW"));

// locale + 時區
console.log(d.toLocaleString("zh-TW", {timeZone: "Asia/Tokyo"})); // 格林威治時間 +9

// 注意以下的差別: 
console.log(d);
// to json string


console.log({myDate: d});

// json 資料型態 key & value 會以""包覆
console.log(JSON.stringify({
                myDate: d
            }));


// console.log(d.toString());
// let innerObject = {"name": "Luna", "age": 5};
// let object = {"name": "Justin", "age": 10, "innerObject":innerObject};
// console.log(object);

