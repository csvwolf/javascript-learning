/**
 * Created by SkyAo on 16/3/10.
 *
 * 实现数组\对象的深拷贝
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function() {
    return this.name;
};

var person1 = new Person('Sky', 19);

var arr = [1, 2, [1, [3, 4], 'hello'], [[person1, {'name': 'peek', friend:[1, 2, 3]}], undefined]];

/**
 * 实现数组的深拷贝
 * 但是实际上,这种拷贝方式有许多种不足之处:比如丢失对象的原型链\函数的拷贝等等
 * @param arr
 * @returns {Array}
 */
var deepCopyOfArray = function(arr) {
    var newArr = [], key, innerKey, tempObj = {};

    for (key in arr) {
        if (arr[key] instanceof Array) {
            newArr.push(deepCopyOfArray(arr[key])); // 把深拷贝递归返回的数组添加到数组中
        } else if (arr[key] instanceof Object) {
            for (innerKey in arr[key]) {
                if (typeof arr[key][innerKey] == 'object') {
                    tempObj[innerKey] = deepCopyOfArray(arr[key][innerKey]);    // 递归复制
                } else {
                    tempObj[innerKey] = arr[key][innerKey];     // 将值传入对象
                }
            }

            newArr.push(tempObj);   // 对象差存入数组
            tempObj = {};   // 引用类型,我们需要新开一段空间来使得tempObj指向新对象
        } else {
            newArr.push(arr[key]);
        }
    }
    return newArr;  // 返回数组
};


/**
 * 解决了原型链问题的深拷贝
 * @param obj
 * @returns {*}
 */
var deepCopyOfObject = function(obj) {
    var Constructor = obj.constructor,
        newObj = null,
        key;

    if (typeof obj == 'object') {
        newObj = new Constructor();
        if (obj instanceof Array) {
            for (key in obj) {
                if (typeof obj[key] == 'object') {
                    newObj.push(deepCopyOfObject(obj[key]));
                } else {
                    newObj.push(obj[key]);
                }
            }
        } else {
            for (key in obj) {
                if (typeof obj[key] == 'object') {
                    newObj[key] = deepCopyOfObject(obj[key]);
                } else {
                    newObj[key] = obj[key];
                }
            }
        }
    } else {
        newObj = obj;
    }

    return newObj;
};

//console.log(deepCopyOfArray(arr)[3][0][0]);
console.log(deepCopyOfObject(arr));