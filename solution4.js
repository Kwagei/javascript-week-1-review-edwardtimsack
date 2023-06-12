// Write a function that takes an array of numbers and returns an array of the numbers in reverse order.

let arr = [ 90, 80, 76, 66, 52, 40, 30, 20, 10, 0];

function reverseOrder(number) {
    let reverseArr = [];
    for (let i = number.length -1; i >= 0; i--) {
        reverseArr[reverseArr.length] = number[i];
    }
    return reverseArr;
}

reverseOrder(arr);