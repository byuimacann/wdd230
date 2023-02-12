/*const span3 = document.getElementById("wChill");

let temp = parseInt(document.getElementById("tempF").value);
let wS = parseFloat(document.getElementById("wSpeed").value);
let wC = windChill(temp, wS);
span3.innerHTML = wC.toFixed(1);
    
function windChill (tF, speed){
if ((tF <= 50) && (speed > 3)) {
  wC = 35.74 + 0.6215 * tF - 35.75 * Math.pow(speed .16) + 0.4275 * tF * Math.pow(speed, .16); 
}
else {
  wC = "N/A"
  return wC;
}
}*/

const span1 = document.getElementById("tempF");
const span2 = document.getElementById("wSpeed");
const span3 = document.getElementById("wChill");

let temp = parseInt(span1.value);
let wS = parseInt(span2.value);

if ((temp <= 50) && (wS > 3)) {
let f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wS .16) + 0.4275 * temp * Math.pow(wS, .16);
}
else {
   f = "N/A";
} 

span3.innerHTML = f.toFixed(1);
