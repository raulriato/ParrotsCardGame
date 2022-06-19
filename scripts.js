let numberOfCards = prompt('Com quantas cartas você quer jogar? Escolha entre 4 e 14');
let gifs = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn'];
let counter = 0;

function isInRange(numberOfCards){
    return Number(numberOfCards) >= 4 && Number(numberOfCards) <= 14;
}

function isEven(numberOfCards){
    return Number(numberOfCards)%2 === 0;
}

function isValid(numberOfCards){
    return isEven(numberOfCards) && isInRange(numberOfCards)
}

function cardsNumber (){
    while(numberOfCards === null || !isValid(numberOfCards)){
        numberOfCards = prompt('Por favor, digite um número par entre 4 e 14')
    }

    addCards(numberOfCards);
}

cardsNumber();

function shuffleCards(){
    return Math.random() - 0.5;
}

function addCards(numberOfCards){
    let insertGif = [];
    for(let i = 0; i < numberOfCards/2; i++){
        insertGif.push(gifs[i])
        insertGif.push(gifs[i])
    }
    insertGif.sort(shuffleCards);
    for(let j = 0; j < numberOfCards; j++){
        cardTemplate = `
        <li onclick="flip(this)">
            <img src="./Images/front.png" class="front">
            <img src="./Images/${insertGif[j]}parrot.gif" class="back">
        </li>
        `
        //console.log(cardTemplate)
        
        document.querySelector('ul').innerHTML += cardTemplate
    }
}

let flipped1;
let flipped2;

function flip(card){
    counter += 1;
    if(flipped1 && flipped2){
        return
    }
    flipped1 = document.querySelector('.turn');
    console.log(flipped1);
    card.classList.toggle('turn');
    if(flipped1 !== null && flipped1 !== card){
        flipped2 = card
        console.log(flipped2);
        compareCards();
    }
}

function unflipCards(){
    flipped1.classList.remove('turn')
    flipped2.classList.remove('turn')
    flipped1 = null;
    flipped2 = null;
}


function compareCards(){
    if(flipped1.innerHTML !== flipped2.innerHTML){
        console.log(flipped1 !== flipped2)
        setTimeout(unflipCards, 1000);
    } else {
        flipped1.classList.remove('turn')
        flipped2.classList.remove('turn')
        flipped1.classList.add('turned')
        flipped2.classList.add('turned')
        flipped1 = null;
        flipped2 = null;
    }
    setTimeout(endGame, 1000);
}

function endGame(){
    let flippedCards = document.querySelectorAll('.turned');
    if(flippedCards.length === Number(numberOfCards)){
        alert(`Você ganhou em ${counter} jogadas!`)
    }
}