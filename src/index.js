module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 != 0)
        return false;
    let arr = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        arr.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }
    for (let i = 0; i < arr.length; i++) {
        if (str.includes(arr[i])) {
            str = str.replace(arr[i], "");
            i = -1;
        }
    }
    if (str.length != 0) {
        return false;
    }
    return true;
}
