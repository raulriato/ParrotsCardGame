let numberOfCards = prompt('Com quantas cartas você quer jogar? Escolha entre 4 e 14');

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
    alert('tudo certo')
}

function flip(card){
    card.classList.toggle('turn');
    front = card.querySelector('.front');
    back = card.querySelector('.back');
    if (front.classList.contains('hidden')){
        back.classList.add('hidden');
        front.classList.remove('hidden');
    } else if (back.classList.contains('hidden')){
        front.classList.add('hidden');
        back.classList.remove('hidden');
    }
}