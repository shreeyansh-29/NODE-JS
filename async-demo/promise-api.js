const p1 = new Promise((resolve, reject) => {
  // Kick off some async work
  // ...
  setTimeout(() => {
    resolve(1); // pending => resolved, fulfilled
    //   reject(new Error('message')); // pending => rejected
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  // Kick off some async work
  // ...
  setTimeout(() => {
    resolve(2); // pending => resolved, fulfilled
    //   reject(new Error('message')); // pending => rejected
  }, 2000);
});

Promise.all([p1, p2]).then((res) => console.log(res));
