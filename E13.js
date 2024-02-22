const URL = "https://cat-fact.herokuapp.com/facts";
const catData = document.querySelector("#cat");
const btn = document.querySelector("#btn");

const getData = async () => {
  console.log("getting data");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  catData.innerText = data[2].text;
  catData.style.backgroundColor = "blue";
  catData.style.width = "200px";
};

btn.addEventListener("click", getData);
