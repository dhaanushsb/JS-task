// Write a JavaScript function that takes an array of numbers and finds the second lowest 
// and second greatest numbers, respectively.
// Sample array : [100,200,300,400,500]
// Expected Output : 200,400

/* --------------------------------------------------------------------------------- */

function findSecondLowestAndGreatest(arr) {
    // Remove duplicates and sort the array
    const uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
  
    if (uniqueArr.length < 2) {
      return "Array needs at least two unique numbers.";
    }
  
    // Second lowest is the element at index 1
    const secondLowest = uniqueArr[1];
  
    // Second greatest is the element at index length - 2
    const secondGreatest = uniqueArr[uniqueArr.length - 2];
  
    return { secondLowest, secondGreatest };
  }
  
  // Example usage:
  const result = findSecondLowestAndGreatest([100, 200, 300, 400, 500]);
  console.log(result); // Output: { secondLowest: 200, secondGreatest: 400 }
  

/* --------------------------------------------------------------------------------- */