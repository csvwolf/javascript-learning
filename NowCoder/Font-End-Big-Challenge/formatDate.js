/**
 * Created by SkyAo on 16/1/25.
 *
 * Title: 时间格式化输出
 *
 * Function: 按所给的时间格式输出指定的时间
 *
 * Numbers Of Method:
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

    var formatToLeadingZero = function(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    };

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

/*    return sFormation.replace(/yyyy/ig, format.yyyy)
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
                     .replace(/w/ig, format.w);*/

    return sFormation.replace(/[a-z]+/ig, function($1) { return format[$1] } );

};

console.log(formatDate(new Date(1453692967983), 'yy-M-d H:m:s 星期w'));
console.log((/[a-z]+/i).exec("Hello"));