const toggleBtn = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-list');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('show-menus');
});