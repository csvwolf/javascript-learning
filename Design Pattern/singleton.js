/**
 * 单例模式
 *
 * 目前的下述单例实现都具有不透明性，之后会改成透明性高的单例模式
 */
const Singleton = function(name) {
  this.name = name;
  this.instance = null;
}

Singleton.prototype.getName = function() {
  return this.name;
}

Singleton.getInstance = function(name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }

  return this.instance;
}

const a = Singleton.getInstance('sven1');
const b = Singleton.getInstance('sven2');

console.log(a === b); // true

/**
 * ES6的写法
 */
class Singleton2 {
  constructor(name) {
    this.name = name;
    // this.instance = null;
  }

  getName() {
    return this.name;
  }

  // 静态类
  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Singleton2(name);
    }

    return this.instance;
  }
}

const c = Singleton2.getInstance('sven1');
const d = Singleton2.getInstance('sven2');

console.log(c === d);

class Singleton3 {

  constructor(name) {
    this.name = name;
  }

  static getInstance() {
    (function() {
      let instance;
      return function(name) {
        if (!instance) {
          instance = new Singleton3(name);
        }
        return instance;
      }
    })();
  }
}

const e = Singleton3.getInstance('sven1');
const f = Singleton3.getInstance('sven2');

console.log(e === f);
