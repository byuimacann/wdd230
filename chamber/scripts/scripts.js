//Hamburger Menu Toggle Function//
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;



//Last Modified Date in Footer//
const modDate = document.lastModified;
const lastModDate = new Date(modDate);

document.getElementById("lastMod").innerHTML = `Last Updated: ${new Date(modDate)}`;



//Date in Bottom of Header//
const datearea = document.querySelector("#bottomofheader");

const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(today);

datearea.innerHTML = fulldate;



