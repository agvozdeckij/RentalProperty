if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


// Menu-icon-wrapper
const sidebarToggelBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.sidebar');

sidebarToggelBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sideBar.classList.toggle('sidebar--mobile--active');
}

// BtnShowMoreCards
const btnShowMoreCards = document.querySelector('.btn');
const hiddenCards = document.querySelectorAll('.card-link-hidden');

btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function (card){
        card.classList.remove('card-link-hidden');
    })
})

// Widget
const widgets = document.querySelectorAll('.widget')

widgets.forEach(function (widget) {
    widget.addEventListener('click', function (event) {
        if (event.target.classList.contains('widget-title')) {
            event.target.classList.toggle('widget-title--active');
            event.target.nextElementSibling.classList.toggle('widget-body--hidden')
        }
    })
})
/* Кнопка показать ёщё в widget:дополнительные услуги */
const btnShowMoreWidget = document.querySelector('.link-show-more');
const hiddenElements = document.querySelectorAll('.hidden-elements');

btnShowMoreWidget.addEventListener('click', function (e) {
    e.preventDefault();
    // Если блоки "дополнительные услуги" были скрыты, значит показываем
    if (btnShowMoreWidget.dataset.options == 'hidden') {
        hiddenElements.forEach(function (el) {
            el.classList.remove('hidden-elements');
            btnShowMoreWidget.innerText = 'Скрыть дополнительные элементы'
            btnShowMoreWidget.dataset.options = 'visible'
        })
    }
    // Если блоки "дополнительные услуги" были показаны, значит скрываем
    else if (btnShowMoreWidget.dataset.options == 'visible') {
        hiddenElements.forEach(function (el) {
            el.classList.add('hidden-elements');
            btnShowMoreWidget.innerText = 'Показать еще';
            btnShowMoreWidget.dataset.options = 'hidden'
        })
    }
})

// Выбор кнопки 'любая' и сброс всех остальных checkbox-ов
const locationBtnAny = document.querySelector('#location-05');
const topLocationBtn = document.querySelectorAll('[data-location-param]')

locationBtnAny.addEventListener('change', function () {
    if (locationBtnAny.checked) {
        topLocationBtn.forEach(function (item) {
            item.checked = false 
        }) 
   } 
})
// Выбор любого из checkbox-ов вверху и сброс кнопки 'любая'
topLocationBtn.forEach(function (item) {
    item.addEventListener('change', function () {
        if (locationBtnAny.checked) {
            locationBtnAny.checked = false;
        }
    })
})