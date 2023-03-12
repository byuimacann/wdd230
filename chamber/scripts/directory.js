//JSON Data File Script - Directory Page
const url = 'https://byuimacann.github.io/wdd230/chamber/json/data.json';

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.businesses);
    displayBusinesses(data.businesses);
}

getBusinessData();


const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.cards');

    businesses.forEach((business) => {
    let card = document.createElement('section');
    let bname = document.createElement('h2');
    let logo = document.createElement('img');
    let baddress = document.createElement('p');
    let bphone = document.createElement('p');
    let weburl = document.createElement('p');
    let level = document.createElement('p');

    card.setAttribute('class', 'business');

    bname.textContent = `${business.bname}`;
    
    logo.setAttribute('src', business.logourl);
    logo.setAttribute('class', 'business-logo');
    logo.setAttribute('alt', `Logo of ${bname}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '300');
//    logo.setAttribute('height', '400');

    baddress.textContent = `Address: ${business.baddress} 
    ${business.bcity} ${business.bstate} ${business.bzip}`;

    bphone.textContent = `Phone: ${business.bphone}`;

    weburl.textContent = `Website: ${business.weburl}`;

    level.textContent = `${business.memberlevel} Member`;

    card.appendChild(bname);
    card.appendChild(logo);
    card.appendChild(baddress);
    card.appendChild(bphone);
    card.appendChild(weburl);
    card.appendChild(level);

    cards.appendChild(card);
});
}



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