// 1 - listen to the button

const button = document.querySelector('.button');
const cardDiv = document.querySelector('.card');
button.addEventListener('click', getCard);

// 2 - empty the drop and fetch a card
async function getCard(){
    cardDiv.innerHTML = '';
    const res = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1");
    const docaData = await res.json();
    const cardURL = docaData.cards[0].image;
    displayImage(cardURL);

}

// 3 - make new img and place url into it

function displayImage(cardURL){
    let cardpic = document.createElement('img');
    cardpic.setAttribute('src', `${cardURL}`);
    cardDiv.appendChild(cardpic);
    return;
}
