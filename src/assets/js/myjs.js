export function gettruenumber(number) {
    let n = Number(number)
    if (n >= 10) {
        return n
    } else {
        return "0" + n
    }
}

export function formatDate(date, fmt) {
    var currentDate = new Date(date);
    var o = {
        "M+": currentDate.getMonth() + 1, //月份
        "d+": currentDate.getDate(), //日
        "h+": currentDate.getHours(), //小时
        "m+": currentDate.getMinutes(), //分
        "s+": currentDate.getSeconds(), //秒
        "q+": Math.floor((currentDate.getMonth() + 3) / 3), //季度
        "S": currentDate.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (currentDate.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export function gettime(year, mouth) {
    // console.log(mouth)
    let theday = year + "-" + gettruenumber(mouth) + "-01~" + year + "-" + gettruenumber(mouth) + "-"
    if ((year % 4 === 0 && year % 100 != 0 && mouth === 2) || (year % 400 == 0 && mouth === 2)) {
        theday += 29
    } else if (mouth === 0) {
        theday = year + "-01-01~" + year + "-12-31"
    } else {
        if (mouth in [1, 3, 5, 7, 8, 10, 12]) {
            theday += 31
        } else {
            theday += 30
        }
    }
    console.log(theday);
    return theday
}
export function isnull(str) {
    if (str === null || str === "null" || str === undefined || str === "undefined" || str === "") {
        return "--"
    } else {
        return str
    }
}