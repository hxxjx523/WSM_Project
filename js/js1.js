const toggleBtnDown = document.querySelector('.bi-chevron-compact-down');
const toggleBtnUp = document.querySelector('.bi-chevron-compact-up');
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