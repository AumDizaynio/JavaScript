const data = () => {
  return new Promise((res, rej) => {
    // res("success");
    rej("error");
  });
};

let promise = data();

promise.then((res) => {
  console.log(res);
});

promise.catch((rej) => {
  console.log("error that I didn't expected " + rej);
});
