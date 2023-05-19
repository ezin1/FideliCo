const hamburguerBtn = document.querySelector('#hamburguer-btn');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('.close');

hamburguerBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


