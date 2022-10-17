// 1 - listen to the button

const button = document.querySelector('.button');
const cardPos1 = document.querySelector('#card1');
const cardPos2 = document.querySelector('#card2');
const cardPos3 = document.querySelector('#card3');
const positions = [cardPos1, cardPos2, cardPos3];

(function buttonAddEL(){
    button.textContent = `Set'em up!`;
    button.addEventListener('click', setemup);
})();

// 2 - empty the drop, draw three cardbacks

function setemup(){
    document.querySelector('.card').innerHTML = '';
    const cardSRC = './assets/cardback.png';
    for (let i = 0; i < positions.length; i++){
        displayPics(cardSRC, positions[i]);
    }
    getCards();
}
// 3 - shuffle and take out three cards then 
//  fetch the cards

async function getCards(){
    const res1 = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,AC,QH");
    
    const deckData = await res1.json();
   
    const deckId = deckData.deck_id;
  


    const res2 = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`);
    const cardsData = await res2.json();
    console.log(cardsData);
    chooseACard(cardsData);

}

function chooseACard(cardsData){
    button.removeEventListener('click', setemup);
    button.textContent = 'Click your Pick!!!';
    for (let i = 0; i < positions.length; i++){
        positions[i].addEventListener('click', () => winOrLose(cardsData, i));
    }

}


function winOrLose(cardsData, position){
    displayPics(cardsData.cards[position].image,positions[position]);
    console.log('hej' + position);
    if (cardsData.cards[position].code === 'QH') {
        setWinLoseText(position, 1);

    } else {
        setWinLoseText(position);
        // showtimer();
    }
   console.log('Hi!')
}

function setWinLoseText(position, wol = 2){
    console.log(wol);
    let winLoseText = document.createElement('h2');
    switch(wol){
        case 1:
            console.log(wol);
            winLoseText.textContent = 'You Win!!!';
            break;
        case 2:
            console.log(wol);
            winLoseText.textContent = 'You Lose!';
            break;
    }
    positions[position].appendChild(winLoseText);
    for (let i = 0; i < positions.length; i++){
        console.log(i + 290)
        positions[i].removeEventListener('click', () => winOrLose(cardsData, i));
   }
    return;
}




// lay out the pick buttons and set listener to them

// 'turn' all cards (change src in img tag),
//  remove pick buttons, display you win/lose

// 3 - make new img and place url into it

function displayPics(cardSRC,cardPos){
    cardPos.innerHTML = `<img src="${cardSRC}">`;
    return;
}

// function displayImage(cardSRC){
//     let cardpic = document.createElement('img');
//     cardpic.setAttribute('src', `${cardSRC}`);
//     cardDiv.appendChild(cardpic);
//     return;
// }

// function displayBacks(cardSRC,cardPos){
//     let cardpic = document.createElement('img');
//     cardpic.setAttribute('src', `${cardSRC}`);
//     cardPos.appendChild(cardpic);
//     return;
// }
