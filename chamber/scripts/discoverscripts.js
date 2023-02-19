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



  //Days Between Page Visits Stored on Local Storage//
  const daysDisplay = document.querySelector("#daysBetween");

  const today = new Date()
  const lastDate = today.getDate();
  
  let lastVisited = Number(localStorage.getItem("lastDate"));
  localStorage.setItem("lastDate", lastVisited);

  let daysBetween = (lastVisited - Date.now()) / 84600000;

  daysDisplay.innerHTML = `Days Between Visits: ${daysBetween.toFixed(0)}`;



  
  

  

  
  
  
  
  
  
  