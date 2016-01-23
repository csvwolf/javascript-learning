/**
 * Created by SkyAo on 16/1/23.
 *
 * Title: 根据包名，在指定空间中创建对象
 *
 * Function: 根据包名，在指定空间中创建对象
 *
 * Numbers of Method: 1
 */

var namespace = function(oNamespace, sPackage) {
    var pack = sPackage.split('.'),
        space = oNamespace;

    for (var i = 0; i < pack.length; i++) {
        // 如果不存在,或者不为对象,则需要创建,如样例:
        // namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
        // {a: {test: 1, b: {c: {d: {}}}}}
        if (!space[pack[i]] || typeof space[pack[i]] !== 'object') {
            space[pack[i]] = {};
        }
        space = space[pack[i]];
    }

    return oNamespace;
};

console.log(namespace({a: {test: 1, b: 2}}, 'a.b.c.d'));