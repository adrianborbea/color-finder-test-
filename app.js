const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
let h2 = document.getElementById("header")
let color2=document.createTextNode("negro")
h2?.appendChild(color2)

let h4=document.getElementById("caca")
let color3=document.createTextNode("maro")
h4?.appendChild(color3)

let divtest=document.createElement("div")
let ptest=document.createElement("p")
let texttest=document.createTextNode("welcome")
ptest.appendChild(texttest)
divtest.appendChild(ptest)
let body=document.getElementById("bodytest")
body?.appendChild(divtest)
ptest.setAttribute("class","red")
