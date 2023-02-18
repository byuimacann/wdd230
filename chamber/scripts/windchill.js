const span1 = document.querySelector("#tempF");
const span2 = document.querySelector("#wSpeed");
const span3 = document.querySelector("#wChill");

let temp = parseFloat(span1.value);
let speed = parseFloat(span2.value);
let wC = windChill(temp, speed);
span3.innerHTML = wC;

function windChill(tF, wS){
if (tF <= 50 && wS > 3) {
  let result = 35.74 + 0.6215 * tF - 35.75 * Math.pow(wS, .16) + 0.4275 * tF * Math.pow(wS, .16);
  return result; 
}
  else {
  result = "N/A"
  return result;
}
}
