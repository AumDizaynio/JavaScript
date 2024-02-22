ar = [1, 5, 7, 8, 9, 6, 3, 2];

ar = ar.sort();

console.log(ar);

let br = ar.reduce((res, cur) => {
  return res > cur ? res : cur;
});

console.log(br);
