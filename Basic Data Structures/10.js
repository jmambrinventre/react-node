function quickCheck(arr, elem) {
    // Only change code below this line;
    let c = false
    if (arr.indexOf(elem) >= 0) {c = true};
    return c
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));