//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

//My first thought for this problem was to use the sort method and have it sort lowest to highest
//Now you will have the 2 smallest numbers at index [0] and [1]
//Next return the value adding both together

function sumTwoSmallestNumbers(numbers) {  
    //Code here
    const num1 = numbers.sort((a, b) => a - b);
      return num1[0] + num1[1]
  }