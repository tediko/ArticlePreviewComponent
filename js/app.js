const shareButton = document.querySelector('[data-share]');
const shareOverlay = document.querySelector('[data-share-overlay]');

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

const removeOverlay = () => {
    shareOverlay.classList.remove('active');
    shareOverlay.classList.add('close');
}

const removeButtonCta = () => {
    shareButton.style.pointerEvents = 'auto';
}

const removeActiveOverlay = () => {
    shareButton.style.pointerEvents = 'auto';
    shareOverlay.classList.remove('close');
    shareButton.classList.remove('active');
    shareOverlay.classList.remove('active');
}

shareButton.addEventListener('click', showOverlay);
shareOverlay.addEventListener('click', removeOverlay);
shareOverlay.addEventListener('animationend', removeButtonCta);
window.addEventListener('resize', removeActiveOverlay);