// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(array, bookName) {
  let arr2 = [...array];
  arr2.push(bookName);
  return arr2;
  
  // Change code above this line
}

// Change code below this line
function remove(array, bookName) {
  let arr2 = [...array]; 
  if (arr2.indexOf(bookName) >= 0) {
    
    arr2.splice(arr2.indexOf(bookName), 1);
    
    return arr2;

    // Change code above this line
    }
}