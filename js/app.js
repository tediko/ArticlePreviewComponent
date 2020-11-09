const shareButton = document.querySelector('[data-share]');
const shareOverlay = document.querySelector('[data-share-overlay]');

const showOverlay = () => {
    shareButton.style.pointerEvents = 'none';
    if (shareOverlay.classList.contains('active')) {
        shareOverlay.classList.remove('active');
        shareOverlay.classList.add('close');
    } else {
        shareOverlay.classList.remove('close');
        shareOverlay.classList.add('active');
    }
}

const removeButtonCta = () => {
    shareButton.style.pointerEvents = 'auto';
}

shareButton.addEventListener('click', showOverlay);
shareOverlay.addEventListener('animationend', removeButtonCta);