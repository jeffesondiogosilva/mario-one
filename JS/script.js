const mario = document.querySelector('.mario');



function tocar (){
    const audio = new Audio('Super-Mario.mp3');
    audio.play();
    audio.loop = true;    

    
}




const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500)
}


const loop = setInterval(() => {

    const pipe = document.querySelector('.pipe');

    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');  //posição vertical

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 40) {

        pipe.style.animation = 'none';        
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';        
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '45px';
        mario.style.marginBottom = '100px';


        clearInterval(loop);
    }

}, 10);


if (window.screen.width < 768) {

    document.addEventListener('touchstart', jump);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 40) {

        pipe.style.animation = 'none';        
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';        
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '40px';
        mario.style.marginLeft = '45px';
        mario.style.marginBottom = '200px';


        clearInterval(loop);
    }
    
   
} else {
    document.addEventListener('keydown', jump);
}

// document.addEventListener('onreload', tocar());