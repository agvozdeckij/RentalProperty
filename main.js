const sidebarToggelBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.sidebar');

sidebarToggelBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sideBar.classList.toggle('sidebar--mobile--active');
}


const btnShowMoreCards = document.querySelector('.btn');
const hiddenCards = document.querySelectorAll('.card-link-hidden');

btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function (card){
        card.classList.remove('card-link-hidden');
    })

})