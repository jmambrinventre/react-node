function testLogicalOr(val) {
    // Only change code below this line
  
    if ((val >= 0) && (val <= 9)  || (val >= 21) && (val <= 25)) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);