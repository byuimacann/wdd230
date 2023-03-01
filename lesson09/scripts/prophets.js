const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
   // console.table(data.prophets);
   displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); //select the output container

    prophets.forEach((prophet) => {
        //create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let bDate = document.createElement('p');
        let bPlace = document.createElement('p');
        let portrait = document.createElement('img');

        //Build the h2 content out to show the prophet's full name
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        //Build the bDate content out to show the prophet's birthdate
        bDate.textContent = `Date of Birth: ${prophet.birthdate}`;

        //Build the bPlace content out to show the prophet's birthplace
        bPlace.textContent = `Place of Birth: ${prophet.birthplace}`;


        //Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - #${prophet.order} Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //Append the section (card) with the created elements
        card.appendChild(h2);
        card.appendChild(bDate);
        card.appendChild(bPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    }); // end of forEach loop
} // end of function expression