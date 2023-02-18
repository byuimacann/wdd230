const span1 = document.querySelector("#tempF");
const span2 = document.querySelector("#wSpeed");
const span3 = document.querySelector("#wChill");

let temp = parseFloat((span1).innerText);
let speed = parseFloat((span2).innerText);
let wC = windChill(temp, speed);
span3.innerHTML = wC.toFixed(1);

function windChill(tF, wS){
let f; 
if (tF <= 50 && wS > 3) {
  f = 35.74 + 0.6215 * tF - 35.75 * Math.pow(wS, .16) + 0.4275 * tF * Math.pow(wS, .16);
  return f; 
}
  else {
  f = "N/A"
  return f;
}
}
