const btn = document.querySelector(".btn");
const para = document.querySelector("p");
const old = para.innerText;

btn.addEventListener("click", () => {
  para.innerText = old + "    " + window.location.href;

  alert(`${window.location.host}`);
});
