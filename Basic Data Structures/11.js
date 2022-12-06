function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    let ar = [];
    var c = true;
    console.log(arr[i])
    for (let j = 0; j < arr[i].length; j++) {
      if ((arr[i][j]) == elem) {
        console.log(arr[i][j])
        c = false;
      } else 
      { console.log(arr[i][j]); 
        ar = ar.concat(arr[i][j])
        console.log(ar)}
    }
    if (c == true) {
      newArr.push(ar);
      console.log(newArr)
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));