const shareButton = document.querySelector('[data-share]');
const shareOverlay = document.querySelector('[data-share-overlay]');

/* Display overlay on screen */
const showOverlay = () => {
    shareButton.style.pointerEvents = 'none';
    if (shareOverlay.classList.contains('active')) {
        shareOverlay.classList.remove('active');
        shareOverlay.classList.add('close');
        shareButton.classList.remove('active');
    } else {
        shareOverlay.classList.remove('close');
        shareOverlay.classList.add('active');
        shareButton.classList.add('active');
    }
}
/* Remove overlay when the user clicks on share link inside or contaienr itself  */
const removeOverlay = () => {
    shareOverlay.classList.remove('active');
    shareButton.classList.remove('active');
    shareOverlay.classList.add('close');
}

/* Disable button until the animation is complete */
/* Prevent spamming shareButton before animation ends */
const removeButtonCta = () => {
    shareButton.style.pointerEvents = 'auto';
}

/* Remove all active classes on shareButton/shareOverlay while window resizing */
/* to prevent bugs with animations*/
const removeActiveOverlay = () => {
    shareButton.style.pointerEvents = 'auto';
    shareOverlay.classList.remove('close');
    shareButton.classList.remove('active');
    shareOverlay.classList.remove('active');
}

/* Event listeners */
shareButton.addEventListener('click', showOverlay);
shareOverlay.addEventListener('click', removeOverlay);
shareOverlay.addEventListener('animationend', removeButtonCta);
window.addEventListener('resize', removeActiveOverlay);