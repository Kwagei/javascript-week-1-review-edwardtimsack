function descendingOrder(numbers) {
    var len = numbers.length;
  
    for (var i = 0; i < len - 1; i++) {
      for (var j = i + 1; j < len; j++) {
        if (numbers[i] < numbers[j]) {
          var temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
        }
      }
    }
  
    return numbers;
  }
  
  // Example usage
  var array = [6, 4, 10, 1, 2];
  var sortedArray = descendingOrr(array);
  console.log(sortedArray);
  