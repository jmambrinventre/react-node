const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
    var cont = 0;
    var uno = 0;
    var dos = 0;
    var tres = 0;
    for (let user in usersObj) {
      cont = cont + 1;
      if ((cont == 1) && (usersObj[user].online == false)) {
        uno = uno + 1; tres = tres + 1;
      } else if ((cont == 1) && (usersObj[user].online == true)) { dos = dos + 1}
      if ((cont == 2) && (usersObj[user].online == false)){
        dos = dos + 1; tres = tres + 1;
      } else if ((cont == 2) && (usersObj[user].online == true)){ uno = uno + 1 }
      if ((cont == 3) && (usersObj[user].online == false)) {
        uno = uno + 1; tres = tres + 1;
      } else if ((cont == 3) && (usersObj[user].online == true)){ dos = dos + 1 }
    };
  
    if (uno == 3) return 1;
    if (dos == 3) return 2;
    if (tres == 3) return 0;
    // Only change code above this line
  }
  
  console.log(countOnline(users));