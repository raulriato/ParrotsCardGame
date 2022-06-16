function flip(card){
    card.classList.toggle('turn');
    front = document.querySelector('.front');
    back = document.querySelector('.back');
    if (front.classList.contains('hidden')){
        back.classList.add('hidden');
        front.classList.remove('hidden');
    } else if (back.classList.contains('hidden')){
        front.classList.add('hidden');
        back.classList.remove('hidden');
    }
}