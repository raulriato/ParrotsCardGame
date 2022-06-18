let numberOfCards = prompt('Com quantas cartas você quer jogar? Escolha entre 4 e 14');
let gifs = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif']

function isRight(numberOfCards){
    return Number(numberOfCards) >= 4 && Number(numberOfCards) <= 14;
}

function isEven(numberOfCards){
    return Number(numberOfCards)%2 === 0;
}

function isValid(numberOfCards){
    return isEven(numberOfCards) && isRight(numberOfCards)
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
            <img src="./Images/${insertGif[j]}" class="back hidden">
        </li>
        `
        //console.log(cardTemplate)
        
        document.querySelector('ul').innerHTML += cardTemplate
    }
}

function flip(card){
    card.classList.toggle('turn');
    front = card.querySelector('.front');
    back = card.querySelector('.back');
    //console.log(front)
    //console.log(back)
    if (front.classList.contains('hidden')){
        back.classList.add('hidden');
        front.classList.remove('hidden');
    } else if (back.classList.contains('hidden')){
        front.classList.add('hidden');
        back.classList.remove('hidden');
    }
}