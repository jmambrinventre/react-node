function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const first = arr.shift();
    return first;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 1));
  console.log("After: " + JSON.stringify(testArr));