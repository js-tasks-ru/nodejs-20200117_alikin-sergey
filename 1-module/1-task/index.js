const intervalId = setInterval(() => {
  console.log('James');
}, 10); //1 //6

setTimeout(() => {
  const promise = new Promise((resolve) => {
    console.log('Richard'); //3
    resolve('Robert');
  });

  promise
      .then((value) => {
        console.log(value); //5

        setTimeout(() => {
          console.log('Michael'); //7

          clearInterval(intervalId);
        }, 10);
      });

  console.log('John'); //4 
}, 10);
