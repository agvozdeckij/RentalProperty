const sidebarToggelBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.sidebar');





sidebarToggelBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sideBar.classList.toggle('sidebar--mobile--active');
}
