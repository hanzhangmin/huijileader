export function gettruenumber(number) {
    let n = Number(number)
    if (n >= 10) {
        return n
    } else {
        return "0" + n
    }
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