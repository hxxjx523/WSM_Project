// const navToggleDiv = document.getElementById("nav_toggle");
const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];

//2. Event Handling
// nav_toggle.onclick = () => alert("안녕");
// nav_toggle.onclick = alert("안녕");
nav_toggle.onclick = () => {
    //햄버거메뉴 클릭하면, 햄버거메뉴 i "bi bi-list"<-> X "bi bi-x-lg"
    navToggleI.classList.toggle("bi-chevron-compact-down");
    navToggleI.classList.toggle("bi-chevron-compact-up");

    //햄버거메뉴 클릭하면, .nav-list에 .show-munu보여주기 <-> 안보여주기
    navListUl.classList.toggle("show-menu");

}