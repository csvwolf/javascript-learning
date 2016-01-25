/**
 * Created by SkyAo on 16/1/25.
 *
 * Title: 时间格式化输出
 *
 * Function: 按所给的时间格式输出指定的时间
 *
 * Numbers Of Method: 2
 */
/**
 * @param {Date} oDate
 * @param {String} sFormation
 * @return {String}
 */
Number.prototype.formatToLeadingZero = function() {
    if (this.valueOf() < 10) {
        return '0' + this.valueOf();
    } else {
        return this.toString();
    }
};

var formatDate = function(oDate, sFormation) {
    var date = oDate,
        week = ['日', '一', '二', '三', '四', '五', '六'];

    // 这是为了测试OJ不通过原因的function,还是觉得用上面的方法比较好
    var formatToLeadingZero = function(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    };

    // 格式化生成
    var format = {
        yyyy: date.getFullYear(),
        yy: date.getFullYear().toString().substring(2),
        MM: formatToLeadingZero((date.getMonth() + 1)),
        M: date.getMonth() + 1,
        dd: formatToLeadingZero(date.getDate()),
        d: date.getDate(),
        HH: formatToLeadingZero(date.getHours()),
        H: date.getHours(),
        hh: formatToLeadingZero((date.getHours() % 12)),
        h: date.getHours() % 12,
        mm: formatToLeadingZero(date.getMinutes()),
        m: date.getMinutes(),
        ss: formatToLeadingZero(date.getSeconds()),
        s: date.getSeconds(),
        w: week[date.getDay()]
    };
/*

    return sFormation.replace(/yyyy/ig, format.yyyy)
                     .replace(/yy/ig, format.yy)
                     .replace(/MM/ig, format.MM)
                     .replace(/M/ig, format.M)
                     .replace(/dd/ig, format.dd)
                     .replace(/d/ig, format.d)
                     .replace(/HH/ig, format.HH)
                     .replace(/H/ig, format.H)
                     .replace(/hh/ig, format.hh)
                     .replace(/h/ig, format.h)
                     .replace(/mm/ig, format.mm)
                     .replace(/m/ig, format.m)
                     .replace(/ss/ig, format.ss)
                     .replace(/s/ig, format.s)
                     .replace(/w/ig, format.w);
*/


    // 无法通过yyMd这种类型,但通过了牛客网的OJ,只有在有分隔符时可以正常工作
    return sFormation.replace(/[a-z]+/ig, function($1) { return format[$1] } );

};
// 所有方法有一个共同的问题,没有办法通过以下测试,s和d都会被替换(不过一般不会这么玩)
console.log(formatDate(new Date(1453692967983), 'yesterday is 星期w'));