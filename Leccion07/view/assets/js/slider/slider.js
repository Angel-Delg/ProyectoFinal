const slider = document.querySelector('.container-slider');
const cards = document.querySelectorAll('.slider');
let contador = 1;
let sizeCard = cards[0].clientWidth;
let interval = 2500; //Tiempo de movimiento

setInterval(() => {
    slide();
});

function slide() {
    slider.style.transform = `translateX(${ - sizeCard * contador}px);`;
    slider.style.transition = `transform 2s`;
    contador++;

    if(contador === cards.length){
        contador = 0;
        setTimeout(() => {
            slider.style.transform = `translateX(0px);`;
            slider.style.transition = `transform 2s`;    
        },interval);
        
    }
}

console.log(cards,sizeCard);