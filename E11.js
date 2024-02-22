let func1 = () => {
  console.log("hello");
};

func1();

function hello() {
  return "hello world";
}

function convertToArray(fun) {
  return fun.split(" ");
}

console.log(convertToArray(hello()));
