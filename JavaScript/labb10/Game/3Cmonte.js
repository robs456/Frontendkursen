
// Todo:
// - Add betting at 1-1 odds
// - add sound
// - add icons

// 1 - listen to the button

const button = document.querySelector('.button');
const cardPos1 = document.querySelector('#card1');
const cardPos2 = document.querySelector('#card2');
const cardPos3 = document.querySelector('#card3');
const positions = [cardPos1, cardPos2, cardPos3];
let cardsData = [];


buttonAddEL();

function buttonAddEL(){
    button.textContent = `Set'em up!`;
    button.addEventListener('click', setemup);
}


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
    cardsData = await res2.json();
    console.log(cardsData); // don't use this to cheat...
    chooseACard();

}

// 4 - listen for clicks on the cards
function chooseACard(){
    button.removeEventListener('click', setemup);
    button.textContent = 'Click your Pick!!!';
    cardPos1.addEventListener('click', pos1Click);
    cardPos2.addEventListener('click', pos2Click);
    cardPos3.addEventListener('click', pos3Click);
   }

// 5 - send the position/card that was clicked,
//  only necessary in order to remove the listeners later
function pos1Click(){
    winOrLose(0);
}
function pos2Click(){
    winOrLose(1);
}
function pos3Click(){
    winOrLose(2);
}

// 6 - show the clicked card, evaluate if win or lose, 
// show appropriate text, remove listeners on the cards
//  and if loss show the queen after some time, then listen to button again

function winOrLose(position){
    displayPics(cardsData.cards[position].image,positions[position]);
   
    if (cardsData.cards[position].code === 'QH') {
        setWinLoseText(position, 1);

    } else {
        setWinLoseText(position);
        showtimer();
    }
    setTimeout(buttonAddEL, 2000);
   
   
}

// 6.1 - if loss, show where the queen is after some time
function showtimer(){
    const showqueen = function (){
        for( let i=0; i < 3; i++) {
            if (cardsData.cards[i].code === 'QH') {
                displayPics(cardsData.cards[i].image,positions[i]);
           }
        }
    }
    setTimeout(showqueen, 1500);
    return;
}

// 6.2 - display text acc to win or localStorage, then remove listeners on the cards
function setWinLoseText(position, wol = 2){
   
    let winLoseText = document.createElement('h2');
    switch(wol){
        case 1:
           
            winLoseText.textContent = 'You Win!!!';
            break;
        case 2:
           
            winLoseText.textContent = 'You Lose!';
            break;
    }
    positions[position].appendChild(winLoseText);
    cardPos1.removeEventListener('click', pos1Click);
    cardPos2.removeEventListener('click', pos2Click);
    cardPos3.removeEventListener('click', pos3Click);
    
    return;
}

// X- useful to display pics
function displayPics(cardSRC,cardPos){
    cardPos.innerHTML = `<img src="${cardSRC}">`;
    return;
}

