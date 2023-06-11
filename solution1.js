// Write a function that takes an array of numbers and returns the sum of the array
function sumArr(arr) {
    let sum = 0;
    for(let e = 0; e < arr.length; e++){
        sum += arr[e]
    }    
    return sum;
}

console.log(sumArr([1,2,3,4,5,6,7,8,9,10]));