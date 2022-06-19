let numberOfCards = prompt('Com quantas cartas você quer jogar? Escolha entre 4 e 14');
let gifs = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn'];

function isInRange(numberOfCards){
    return Number(numberOfCards) >= 4 && Number(numberOfCards) <= 14;
}

function isEven(numberOfCards){
    return Number(numberOfCards)%2 === 0;
}

function isValid(numberOfCards){
    return isEven(numberOfCards) && isInRange(numberOfCards)
}

function verifyCardsNumber (){
    while(numberOfCards === null || !isValid(numberOfCards)){
        numberOfCards = prompt('Por favor, digite um número par entre 4 e 14')
    }

    addCards(numberOfCards);
}

verifyCardsNumber();

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
        document.querySelector('ul').innerHTML += cardTemplate
    }
}

let counter = 0;
let flipped1;
let flipped2;

function flip(card){
    if(flipped1 && flipped2){
        return
    }
    flipped1 = document.querySelector('.turn');
    card.classList.toggle('turn');
    if(flipped1 !== null && flipped1 !== card){
        flipped2 = card
        compareCards();
    }
    counter += 1;
}

function resetFlippedCards(){
    flipped1 = null;
    flipped2 = null;   
}

function unflipCards(){
    flipped1.classList.remove('turn')
    flipped2.classList.remove('turn')
    resetFlippedCards();
}


function compareCards(){
    if(flipped1.innerHTML !== flipped2.innerHTML){
        setTimeout(unflipCards, 1000);
    } else {
        flipped1.classList.remove('turn')
        flipped2.classList.remove('turn')
        flipped1.classList.add('turned')
        flipped2.classList.add('turned')
        resetFlippedCards();
    }
    setTimeout(endGame, 1000);
}

function endGame(){
    let flippedCards = document.querySelectorAll('.turned');
    if(flippedCards.length === Number(numberOfCards)){
        alert(`Você ganhou em ${counter} jogadas!`);
        let playAgain = prompt('Para jogar novamente, digite sim!');
        if(playAgain.toLowerCase() === 'sim'){
            console.log(playAgain.toLocaleLowerCase('sim'))
            let ul = document.querySelector('ul');
            ul.innerHTML = '';
            counter = 0;
            numberOfCards = prompt('Com quantas cartas você quer jogar? Escolha entre 4 e 14');
            verifyCardsNumber(numberOfCards);
        } else {
            alert('Jogo Encerrado');
        }
    }
}