/**
 * Created by SkyAo on 16/3/14.
 */


var Person = function(name) {
    this.name = name;
    //this.prototype.count = this.prototype.count + 1 || 1;
};

Person.prototype.toString = function() {
    return this.name;
};

Person.prototype.count = 1;

Person.prototype.setCount = function() {
    count = 1;
};

Object.defineProperty(Person, 'count', {
    get: function() {
        return this.prototype.count;
    }
});

var ling = new Person('ling');
var lang = new Person('lang');

console.log(ling.count);