/**
 * Created by SkyAo on 16/3/6.
 *
 * Title: 批量改变对象的属性
 *
 * Function: 给定一个构造函数 constructor，请完成 alterObjects 方法，将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。
 *
 * Numbers Of Method: 1
 */

var alterObjects = function (constructor, greeting) {
    constructor.prototype.greeting = greeting;  // 在原型链中添加
};

var C = function(name) {
    this.name = name;
    return this;
};
var obj1 = new C('Rebecca');
alterObjects(C, 'What\'s up');
console.log(obj1.greeting);