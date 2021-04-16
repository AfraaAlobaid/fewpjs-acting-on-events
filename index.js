let dodger = document.getElementById("dodger");
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') moveDodgerLeft();
    else if(e.key === 'ArrowRight') moveDodgerRight();
})

function moveDodgerLeft(){
    let leftCoo = dodger.style.left.replace("px", "");
    leftCoo = parseInt(leftCoo, 10);
    dodger.style.left = (leftCoo > 0) ? `${leftCoo -1}px` : `${leftCoo}px`;
}

function moveDodgerRight(){
    // let gameWidth = document.getElementById("game").offsetWidth;
    // let dodgerWidth = dodger.offsetWidth;

    let leftCoo = parseInt(dodger.style.left.replace("px", ""), 10);
    dodger.style.left = (leftCoo < 360) ? `${leftCoo + 1}px` : `${leftCoo}px`;
}