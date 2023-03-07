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


  
  






