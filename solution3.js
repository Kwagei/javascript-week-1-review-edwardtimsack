// write a function that tells whether a number is even and return it in an array

function evenArr(arrOfNum) {
    let newArr = [];
    for(let i = 0; i < arrOfNum.length; i++){
        if(arrOfNum[i] % 2 === 0){
            newArr[newArr.length] = arrOfNum[i]
        }
    }
    return newArr;
}
console.log(evenArr([1,2,3,4,5,6,7,8,9,10]))