/**
 * Created by SkyAo on 16/3/6.
 *
 * Title: 属性遍历
 *
 * Function: 找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
 *           1、返回数组，格式为 key: value
 *           2、结果数组不要求顺序
 *
 * Numbers Of Method: 1
 */

var iterate = function (obj) {
    var items = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            items.push(prop + ": " + obj[prop]);
        }
    }

    return items;
};

var C = function() {
    this.foo = 'bar';
    this.baz = 'bim';
};

C.prototype.bop = 'bip';

console.log(iterate(new C()));