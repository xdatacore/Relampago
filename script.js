document.addEventListener('DOMContentLoaded', () => {
    function adjustSlide() {
        const slideContainer = document.querySelector('.slide');
        const items = document.querySelectorAll('.item');

        while (slideContainer.firstChild) {
            slideContainer.removeChild(slideContainer.firstChild);
        }
    
        for (let i = 0; i < items.length; i++) {
            slideContainer.appendChild(items[i]);
        }
    }
    adjustSlide();

    const $next = document.querySelector('.next');
    $next.addEventListener('click', () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    });

    const $prev = document.querySelector('.prev');
    $prev.addEventListener('click', () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    });
});