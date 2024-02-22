const fun = function () {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("hero data");
      rej("404");
    }, 5000);
  });
};

console.log("fetching data");
let data = fun();

data.then((res) => {
    console.log(res)
})

data.catch((rej) => {
    console.log(rej);
})
