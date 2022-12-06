let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    let a = userObj.hasOwnProperty('Alan');
    let b = userObj.hasOwnProperty('Jeff');
    let c = userObj.hasOwnProperty('Sarah')
    let d = userObj.hasOwnProperty('Ryan')
    return (a && b && c && d)
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));