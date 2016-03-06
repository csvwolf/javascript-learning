/**
 * Created by SkyAo on 16/3/6.
 *
 * 讲讲几种创建对象的方法,对应JavaScript高级程序设计第六章
 */

/**
 * 工厂模式
 * 没有解决对象识别问题,不知道对象的类型(并且重复创建了函数)
 * @param name
 * @param age
 * @param job
 * @returns {Object}
 */
function createPerson(name, age, job) {
    var o = new Object();
    o.name  = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    };

    return o;
}

person1 = createPerson('工厂模式', 12, '工种1');

/**
 * 构造函数模式
 * 与工厂模式不同的地方: 1. 没有显式的创建对象 2. 直接将属性和方法赋给了this对象 3.没有return语句
 * Notice: new 进行了四个步骤: 1. 创建一个对象 2. 将构造函数的作用域赋给新对象(this指向了这个对象)
 *                           3. 执行构造函数中的代码(为这个对象添加属性) 4. 返回新对象
 * 所以person1.constructor == person2.constructor 是Person函数
 * 如果不使用new会定义在globol上,在浏览器中就是window(因为在全局作用于中调用一个函数时,this总指向global)
 * @param name
 * @param age
 * @param job
 * @constructor
 */
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    }
}

var person1 = new Person('构造函数模式', 12, '工种2');
var person2 = new Person('构造函数模式', 13, '工种2');

/**
 * 原型模式
 * person1和person2的所有属性均相同,但如果修改属性,则会不同(引用类型就很完蛋了)
 * Person.prototype.constructor = Person
 * Ojbect.getPrototypeOf(person3) == Person.prototype
 * hasOwnPrototype检查是否在实例上
 * 用delete删除实例中的内容
 * in检查原型链是否有指定的属性
 * constructor指向Object而不是Person,如果需要,要显式修改
 * @constructor
 */
function Person2() {

}
Person2.prototype.name = '原型模式';
Person2.prototype.age  = 29;
Person2.prototype.job = '工种3';
Person.prototype.sayName = function() {
    console.log(this.name);
};

var person3 = new Person();
var person4 = new Person();

/**
 * 组合使用构造函数模式和原型模式
 * @param name
 * @param age
 * @param job
 * @constructor
 */
function Person3(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['Sky', 'Satelary', 'Lotus'];
}

Person.prototype = {
    constructor: Person3,
    sayName: function() {
        console.log(this.name);
    }
};

/**
 * 动态原型模式
 * 把所有都封装在构造函数中
 * @param name
 * @param age
 * @param job
 * @constructor
 */
function Person4(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    if (typeof this.sayName != 'function') {
        Person.prototype.sayName = function() {
            console.log(this.name);
        }
    }
}

/**
 * 寄生构造函数
 *
 * @param name
 * @param age
 * @param job
 * @returns {Object}
 * @constructor
 */
function Person5(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    };

    return o;
}

var friend = new Person('寄生构造函数', 12, 'NoJob');

/**
 * 稳妥构造函数
 * @param name
 * @param age
 * @param job
 * @returns {Object}
 * @constructor
 */
function Person6(name, age, job) {
    var o = new Object();
    // 可以定义私有变量和函数
    o.sayName = function() {
        console.log(name);
    };

    return o;
}