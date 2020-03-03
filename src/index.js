module.exports = function check(str, bracketsConfig) {
    let testArray = str.split('');
    let configLength = bracketsConfig.length;
    
    if(testArray.length % 2 !== 0){
        return false
    }

    for (let i = 0; i < configLength;) {
        let checkedBrackets = bracketsConfig[i].join('');
        if (str.includes(checkedBrackets)) {
            str = str.replace(checkedBrackets, '');
            i = 0;
        } else {
            i++;
        }
    }

    let result = str.length ? false : true;

    return result;
}
