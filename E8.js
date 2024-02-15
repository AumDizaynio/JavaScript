let book = {
    title:"Roadpath to become proficient developer",
    author:"Robert P. davidson",
    price: 300
}

console.log(book);

for (const key in book) {
        console.log(key,book[key]);
}



const arr = Object.keys(book);
console.log(arr)

const arr2 = Object.values(book);
console.log(arr2)