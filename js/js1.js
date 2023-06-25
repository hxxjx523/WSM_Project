const toggleBtnDown = document.querySelector('.down');
const toggleBtnUp = document.querySelector('.up');
const menu = document.querySelector('.nav-list');

toggleBtnDown.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggleBtnUp.classList.toggle('active');
    toggleBtnDown.classList.add('active');
});

toggleBtnUp.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggleBtnUp.classList.toggle('active');
    toggleBtnDown.classList.remove('active');
});