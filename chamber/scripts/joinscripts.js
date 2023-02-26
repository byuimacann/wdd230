//Hidden Date and Time for form
const dateTime = document.querySelector("#dateTime");

let today = new Date();
dateTime.value = today;

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