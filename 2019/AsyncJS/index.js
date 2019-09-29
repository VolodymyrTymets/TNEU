window.onload = async () => {


  // sync tasks
  console.log('task 1');
  console.log('task 2');
  console.log('task 3');

  // async tasks
  // document.getElementById('form')
  //   .addEventListener('submit', () => {
  //     console.log('do something later submit');
  //   });


  // sync func
  function multiple(a, b) {
    return a + b
  }
  // do something with result
  const result = multiple(2,2);

  function multipleAs(a, b, callback) {
    return setTimeout(() => callback(a * b), 1000);
  }

  multipleAs(2, 2 , (result) => {
    // do something with result after 1 second delay
  })

  // multiply as promise
  const multiplePromise = (a, b) => new Promise((resolve, reject) => {
    multipleAs(a, b, (result, error) => {
      if(error) {
        return reject(error)
      }
      return resolve(result)
    })
  });

  multiplePromise(2, 2)
    .then((result) => {
      // do something with result after 1 second delay
    })
    .catch(error => {
      // show error for user
    })

  Promise.all([
    multiplePromise(2,2),
    multiplePromise(3, 4),
    multiplePromise(11, 10),
  ]).then(([result1, result2, result3]) => {
    console.log('result1 ->', result1);
    console.log('result2 ->', result2);
    console.log('result3 ->', result3);
  }).catch(err => {});

  try {
    const result1 = await multiplePromise(2,2);
    const result2 = await multiplePromise(3,4);
    const result3 = await multiplePromise(11,10);
    console.log('await result1 ->', result1);
    console.log('await result2 ->', result2);
    console.log('await result3 ->', result3);
  } catch (err) {
    console.log(err)
  }

  try {
    const result1 = await multiplePromise(2,2);
    console.log('___ await multiplePromise 1 __');
    const result2 = await multiplePromise(3,4);
    console.log('___ await multiplePromise 2 __');
    const result3 = await multiplePromise(11,10);
    console.log('___ await multiplePromise 3 __');
    console.log('await result1 ->', result1);
    console.log('await result2 ->', result2);
    console.log('await result3 ->', result3);
  } catch (err) {
    console.log(err)
  }

  // console.log('1');
  // setTimeout(() => console.log('2') , 0);
  // console.log('3');
};
