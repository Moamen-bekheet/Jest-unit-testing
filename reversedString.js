function reverseString(str){
    let splitStrArr = str.split('');
    let reversedArr = [];
    console.log(splitStrArr)
    for(let i of [...splitStrArr]){
        reversedArr.push(splitStrArr.pop())
    }
    return reversedArr.join('');
}
module.exports = reverseString;