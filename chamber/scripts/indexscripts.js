//Hamburger Menu Toggle Function//
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;



//Last Modified Date in Footer//
const lastModDate = new Date();
const modDate = document.lastModified;

document.getElementById("lastMod").innerHTML = `Last Updated: ${modDate}`;



//Date in Bottom of Header//
const datearea = document.querySelector("#bottomofheader");

const today = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(today);

datearea.innerHTML = fullDate;



//Monday or Tuesday banner for home page
const banner = document.querySelector('#banner');

const bannerDate = today.getDay();
let message = "";

  if (bannerDate == (1 || 2)){ 
    message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }
  
  banner.innerHTML = message;


//Weather API for home page
const currentTemp = document.querySelector('#tempF');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const wSpeed = document.querySelector('#wSpeed');
const chill = document.querySelector('#wChill');

const url = 'https://api.openweathermap.org/data/2.5/weather?zip=85383,us&units=imperial&appid=d9098826af4391c9d48500b34788c3a1';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    wSpeed.innerHTML = weatherData.wind.speed;


    
const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
const desc = weatherData.weather[0].description;

weatherIcon.setAttribute('src', iconsrc);
weatherIcon.setAttribute('alt', desc);
captionDesc.textContent = desc;

const temp = weatherData.main.temp.toFixed(0);
const speed = weatherData.wind.speed;
chill.innerHTML = windChill(temp, speed);
}



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


  
  






