const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping =  false;
let position = 0;
let score = 0
function handleKeyUp(event) {
if (event.keyCode === 32) {
    if(!isJumping){  
        jump();
    }
    }
}

function jump () {
    
    isJumping = true;
    let upInterval = setInterval(() => {
        if(position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if(position <= 0) {
                    clearInterval(downInterval);   
                    isJumping = false;             
            } else {
        position -= 20;
        dino.style.bottom = position + 'px';
            }
    },20 );
    } else {
    position += 20;
    dino.style.bottom = position + 'px';
    }
}, 20);
} 


const createCactus = () => {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
   
    if (cactusPosition < -60){
        clearInterval(leftInterval);
        background.removeChild(cactus); 
        score += 5;
    }else if(cactusPosition > 0 &&cactusPosition < 60 && position < 60){
    clearInterval(leftInterval);
    alert(`Game Over\nScore: ${score}\nPress OK to restart game. `);
    location.reload()
    }else{
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
    }
    }, 23);
    setTimeout(createCactus, randomTime);
}
createCactus();
document.addEventListener('keyup', handleKeyUp);
