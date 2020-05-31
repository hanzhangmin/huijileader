export function setCookie(string1, string2, atr3) {
    let thedate = new Date();
    thedate.setTime(thedate.getTime() + 60 * 60 * 24 * 365);
    document.cookie = "huijitel=" + string1 + "; expires=" + thedate + ";path=/";
    document.cookie = "huijipas=" + string2 + "; expires=" + thedate + ";path=/";
    document.cookie = "huijistatus=" + atr3 + "; expires=" + thedate + ";path=/";
    document.cookie = "ishave=" + 1 + "; expires=" + thedate + ";path=/";

}
export function getCookie() {
    let cookieArr = document.cookie.split(";");
    let data = {};
    try {
        for (let i = 0, len = cookieArr.length; i < len; i++) {
            let dataarr = cookieArr[i].split("=");
            let thekey = dataarr[0].replace(/^\s*|\s*$/g, "");
            let thevalue = dataarr[1].replace(/^\s*|\s*$/g, "");
            data[thekey] = thevalue;
        }
        return data
    } catch (e) {
        return false
    }
}
export function clearAllCookie() {
    let thedate = new Date();
    thedate.setTime(thedate.getTime() - 60 * 60 * 24 * 365);
    let keys = document.cookie.match(/[^=;]+(?=\=)/g);
    if (keys) {
        for (let i = keys.length; i--;) {
            document.cookie = keys[i] + "=0;expires=" + thedate.toGMTString() + ";path=/";
        }
    }
}