/**
 * Created by SkyAo on 16/3/4.
 *
 * Title: 模块
 *
 * Function: 完成函数 createModule，调用之后满足如下要求：
 *           1、返回一个对象
 *           2、对象的 greeting 属性值等于 str1， name 属性值等于 str2
 *           3、对象存在一个 sayIt 方法，该方法返回的字符串为 greeting属性值 + ', ' + name属性值
 *
 * Numbers Of Method: 5
 */

/**
 * 简单的方法 应该算是寄生构造函数模式的简化版
 * var obj = createModule('hello', 'sky');
 * @param str1
 * @param str2
 * @returns {{greeting: *, name: *, sayIt: sayIt}}
 */
var createModule = function(str1, str2) {
    return {
        greeting: str1,
        name: str2,
        sayIt: function() {
            return this.greeting + ', ' + this.name;
        }
    }
};


/**
 * 工厂模式
 * var obj = createModule2('hello', 'sky');
 * @param str1
 * @param str2
 * @returns {Object}
 */
var createModule2 = function(str1, str2) {
    // var o = new Object();
    var o = {};
    o.greeting = str1;
    o.name = str2;
    o.sayIt = function() {
        return this.greeting + ', ' + this.name;
    };

    return o;
};

/**
 * var obj = new createModule3('hello', 'sky');
 * new 经历了以下四步:
 * 1. 创建一个新对象
 * 2. 将构造函数的作用域赋给新对象(this指向这个对象)
 * 3. 执行构造函数中的代码
 * 4. 返回新对象
 * @param str1
 * @param str2
 */
var createModule3 = function(str1, str2) {
    this.greeting = str1;
    this.name = str2;
    this.sayIt = function() {
        return this.greeting + ', ' + this.name;
    };
    // 构造函数模式没有return语句
};

/**
 * 组合使用
 * @param str1
 * @param str2
 */
var createModule4 = function(str1, str2) {
    this.greeting = str1;
    this.name = str2;
};

createModule4.prototype = {
    constructor: createModule4,
    sayIt: function() {
        return this.greeting + ', ' + this.name;
    }
};

var obj = new createModule4('hello', 'sky');
var obj2 = new createModule4('hi', 'm');
console.log(obj2.sayIt());


