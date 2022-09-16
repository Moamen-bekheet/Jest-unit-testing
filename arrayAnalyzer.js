function analyzeArray(arr){
    let sum = 0;
    for(let i of arr){
        sum += i;
    }
    let avg = sum/arr.length;
    return {
        average: avg,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    };
}

module.exports = analyzeArray;