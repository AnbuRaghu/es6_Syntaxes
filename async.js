async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 3000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
   
  
   // "done!"
    console.log(result)
    console.log('before async')
  }
  
  f();
  console.log('after async function')