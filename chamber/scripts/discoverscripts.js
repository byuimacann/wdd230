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
  const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(today);
  
  let lastVisited = localStorage.getItem("fullDate");
  localStorage.setItem("fullDate", lastVisited);

  let daysBetween = (lastVisited.getItem() - Date.now()) / 84600000;

  daysDisplay.innerHTML = daysBetween.toFixed(0);



  
  

  

  
  
  
  
  
  
  