const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 10}px`
    }
}
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "")
    const right = parseInt(rightNumbers, 10);

    if (right < 380) {
        dodger.style.left = `${right + 10}px`
    }
}
function moveDodgerUp() {
    const upNumbers = dodger.style.bottom.replace("px", "")
    const up = parseInt(upNumbers, 10);

    if (up < 380) {
        dodger.style.bottom = `${up + 10}px` 
    }
}
function moveDodgerBottom() {
    const downNumbers = dodger.style.bottom.replace("px", "")
    const down = parseInt(downNumbers, 10);

    if (down > 0) {
        dodger.style.bottom = `${up - 10}px`
    } 
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrorRight'){
        moveDodgerRight();
    }else if (e.key === 'ArroWLeft'){
        moveDodgerLeft();    
    }else if (e.key === 'ArroWUp'){
        moveDodgerUp();
    }else if (e.key === 'ArroWDown'){
        moveDodgerDown();
    })
}
