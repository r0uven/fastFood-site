nav = document.querySelector("nav")
navButtons = nav.querySelectorAll("button")
navButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
    let main = document.querySelector("main")
    let containersAddButtons = main.querySelectorAll(".add-button")
    containersAddButtons.forEach(function(btn){
        // событие нажатия на триггер открытия модального окна
        btn.addEventListener("click", function () {
            // делаем модальное окно видимым
            modalBackground.style.display = "block";
        
            // если размер экрана больше 1366 пикселей (т.е. на мониторе может появиться ползунок)
            if (windowInnerWidth >= 1366) {
                bodyMargin();
            }
        
            // позиционируем наше окно по середине, где 175 - половина ширины модального окна
            modalActive.style.left = "calc(50% - " + (400 - scrollbarWidth / 2) + "px)";
        });
    })
    });
})
// устанавливаем триггер для модального окна (название можно изменить)


// получаем ширину отображенного содержимого и толщину ползунка прокрутки
const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(windowInnerWidth);

// привязываем необходимые элементы
const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalClose = document.getElementById("close-img");
const modalActive = document.getElementsByClassName("modalActive")[0];

// функция для корректировки положения body при появлении ползунка прокрутки
function bodyMargin() {
    bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}

// при длинной странице - корректируем сразу
bodyMargin();


// нажатие на крестик закрытия модального окна
modalClose.addEventListener("click", function () {
    modalBackground.style.display = "none";
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }
});

// // закрытие модального окна на зону вне окна, т.е. на фон
// modalBackground.addEventListener("click", function (event) {
//     if (event.target === modalBackground) {
//         modalBackground.style.display = "none";
//         if (windowInnerWidth >= 1366) {
//             bodyMargin();
//         }
//     }
// });
