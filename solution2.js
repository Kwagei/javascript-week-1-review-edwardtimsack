// Write a function that takes an array of strings and returns the longest string in the array.
function longestString(arrOfStr){
    let longStr = [];
    for(let e = 0; e , e < arrOfStr.length; e++){
        if(arrOfStr[e].length > longStr.length){
            longStr = arrOfStr[e];
    }
    }
        return longStr;
    }
    let array = ['Timothy', 'James', 'Tangaye', 'Tom']
    let longstr = longestString(array);
    console.log(longestString(array))
