const submit = document.querySelector("#submit");
const uname = document.querySelector("#uname");
const err = document.createElement("p");
const body = document.querySelector("body");
err.innerText = ""


submit.onclick = (e) => {
  let text;

  if (uname.value == "") {
    text = "please enter a valid name";
  }
  else{
    text = "welcome";
  }  

  err.innerText = text;
};

body.append(err)
