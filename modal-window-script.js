"use strict";
//накидываем ивент окрытия модального окна на все карточки из меню навигации
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
            document.getElementsByClassName("modal-first-button")[0].click()
        });
    })
    });
})

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


//кнопки в модальном окне

let modalButtons = document.querySelectorAll(".button-settings button")

//Перекрашивание обратно
function nonActiveModalButtons(active){
    modalButtons.forEach(element => {
        if(active === element){
        
        }else{
            element.style.background = "white"
            element.style.color = "black"
        }
    });
}


//Отслежвание всех кнопок в модальном

modalButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
    btn.style.background = "#d96746"
    btn.style.color = "white"
    nonActiveModalButtons(btn)
    });
})

//hover и active из css
modalButtons.forEach(element => {
    element.addEventListener('mouseover', () => {
        if(element.style.background != "rgb(217, 103, 70)")
        {
            element.style.background = '#d66445';
            element.style.color = "white"
        }
        element.addEventListener('mousedown', () => {

            element.style.background = '#d99582';
            element.style.color = "white"
        
        });
        element.addEventListener('mouseout', () => {
            if(element.style.background != "rgb(217, 103, 70)")
            {
                element.style.background = 'white';
                element.style.color = "black"
            }    
        });
    });
});

const modalIngredientSelectionWindow = document.getElementsByClassName("ingredient-selection-window")[0]
const modalOrderResults = document.getElementsByClassName("order-results")[0]

let allModalContainers

function nonActiveModalContainer(active){
    allModalContainers.forEach(element => {
        if(active === element){
        
        }else{
            element.style.background = ""
            element.style.boxShadow = ""
        }
    });
}

// отрисовка по нажатию кнопки готово!
document.querySelector("#ready-button").onclick = function(){
    
    clearMenuModal()
    
    let readyImg = document.createElement("div")
    readyImg.className = "ready-img"
    readyImg.textContent = "Картинка"

    let readySummary = document.createElement("div")
    readySummary.className = "ready-summary"

    let summaryLabel = document.createElement("div")
    summaryLabel.textContent = "Ваш lorem готов!"
    summaryLabel.className = "summary-label"
    readySummary.appendChild(summaryLabel)

    let summaryHr = document.createElement("hr")
    summaryHr.style.marginTop = "0"
    readySummary.appendChild(summaryHr)

    let summarySize = document.createElement("div")
    summarySize.textContent = "Размер: lorem"
    readySummary.appendChild(summarySize)
    
    let summaryBread = document.createElement("div")
    summaryBread.textContent = "Хлеб: lorem"
    readySummary.appendChild(summaryBread)

    let summaryVegetables = document.createElement("div")
    summaryVegetables.textContent = "Овощи: lorem"
    readySummary.appendChild(summaryVegetables)

    let summarySauce = document.createElement("div")
    summarySauce.textContent = "Соусы: lorem"
    readySummary.appendChild(summarySauce)

    let summaryfilling = document.createElement("div")
    summaryfilling.textContent = "Начинка: lorem"
    readySummary.appendChild(summaryfilling)


    let summaryHr2 = document.createElement("hr") 
    readySummary.appendChild(summaryHr2)

    let summaryType = document.createElement("p")
    summaryType.textContent = "lorem"
    summaryType.className = "summary-type"
    readySummary.appendChild(summaryType)

    modalIngredientSelectionWindow.appendChild(readyImg)
    modalIngredientSelectionWindow.appendChild(readySummary)

    let modalAmountLabel = document.createElement("div")
    modalAmountLabel.style.textAlign = "center"
    modalAmountLabel.textContent = "КОЛИЧЕСТВО"
    modalAmountLabel.style.fontSize = "11px"
    modalOrderResults.appendChild(modalAmountLabel)

    let modalAmount = document.createElement("div")
    modalAmount.className = "modal-amount"
    modalOrderResults.appendChild(modalAmount)

    let modalPriceAndBuckBut = document.createElement("div")
    modalPriceAndBuckBut.className = "price-button"

    let price = document.createElement("div")
    price.className = "modal-price"
    price.textContent = "Цена: lorem"
    
    let inBucket = document.createElement("button")
    inBucket.className = "modal-in-bucket"
    inBucket.textContent = "В КОРЗИНУ"
    inBucket.addEventListener('click', () =>{
        let bucketPositions = document.getElementById("bucket-positions")
        let positionInBucket = document.createElement("div")
        positionInBucket.className = "position-in-bucket"

        let title = document.createElement("div")
        title.textContent = `lorem`
        title.style.flexGrow = '1'
        positionInBucket.appendChild(title)
        
        let editPosition = document.createElement("img")
        editPosition.src = "Картинки/pencil.png"
        editPosition.className = "edit-img"
        editPosition.addEventListener('click', () =>{
            // делаем модальное окно видимым
            modalBackground.style.display = "block";
        
            // если размер экрана больше 1366 пикселей (т.е. на мониторе может появиться ползунок)
            if (windowInnerWidth >= 1366) {
                bodyMargin();
            }
        
            // позиционируем наше окно по середине, где 175 - половина ширины модального окна
            modalActive.style.left = "calc(50% - " + (400 - scrollbarWidth / 2) + "px)";
            document.getElementsByClassName("modal-first-button")[0].click()
        })
        positionInBucket.appendChild(editPosition)

        let deletePosition = document.createElement("img")
        deletePosition.src = "Картинки/trash-can.png"
        deletePosition.className = "delete-img"
        deletePosition.addEventListener('click', () =>{
            positionInBucket.remove()
        })
        positionInBucket.appendChild(deletePosition)
    
        bucketPositions.appendChild(positionInBucket)
        modalBackground.style.display = "none";
        if (windowInnerWidth >= 1366) {
            bodyMargin();
        }
    })
    
    
    modalPriceAndBuckBut.appendChild(price)
    modalPriceAndBuckBut.appendChild(inBucket)
    
    modalOrderResults.appendChild(modalPriceAndBuckBut)

    let buttonMinus = document.createElement("button")
    buttonMinus.textContent = "–"
    modalAmount.append(buttonMinus)

    let amount = document.createElement("div")
    amount.className = "amount"
    let amountContent = document.createElement("div")
    amountContent.textContent = "1"
    amount.append(amountContent)
    modalAmount.append(amount)

    let buttonPlus = document.createElement("button")
    buttonPlus.textContent = "+"
    modalAmount.append(buttonPlus)
}
document.querySelector("#size-button").onclick = function(){
    clearMenuModal()
    selectionCardsDraw()
    allModalContainers = document.querySelectorAll(".modal-container")
}
function selectionCardsDraw(){
    for (let i = 0; i < 2; i++) {
        let modalContainer = document.createElement("div")
        modalContainer.className = "modal-container"

        modalContainer.addEventListener("mouseover", () =>{
            if(modalContainer.style.background !== 'rgb(245, 215, 66)')
            {
                modalContainer.style.background = '#f6d846'
                modalContainer.style.boxShadow = '0 0 4px 2px rgb(151, 151, 151)'
            }
            
        })
        modalContainer.addEventListener("mousedown", () =>{
            modalContainer.style.background = '#f5e076'
        })
        modalContainer.addEventListener("mouseout", () =>{
            if(modalContainer.style.background === 'rgb(246, 216, 70)')
            {
                modalContainer.style.background = ''
                modalContainer.style.boxShadow = ''
            }
            
        })
        modalContainer.addEventListener("click", () =>{
            modalContainer.style.background = '#f5d742'
            nonActiveModalContainer(modalContainer)
        })

        
        let cardImg = document.createElement("div")
        cardImg.textContent = "Картинка"
        modalContainer.appendChild(cardImg)

        let cardLabel = document.createElement("div")
        cardLabel.textContent = "lorem"
        cardLabel.style.fontSize = '20px'
        modalContainer.appendChild(cardLabel)

        let cardHr = document.createElement("hr")
        modalContainer.appendChild(cardHr)

        let cardPrice = document.createElement("div")
        cardPrice.textContent = "Цена: lorem"
        cardPrice.className = "modal-price"
        modalContainer.appendChild(cardPrice)
        modalIngredientSelectionWindow.appendChild(modalContainer)
    }
    

    const totalPrice = document.createElement("div")
    totalPrice.className = "modal-price"
    totalPrice.textContent = "Итого: lorem"
    totalPrice.style.margin = 0
    modalOrderResults.appendChild(totalPrice)
}
function clearMenuModal(){
    while (modalIngredientSelectionWindow.firstChild) {
        modalIngredientSelectionWindow.removeChild(modalIngredientSelectionWindow.firstChild);
    }
    while (modalOrderResults.firstChild) {
        modalOrderResults.removeChild(modalOrderResults.firstChild);
    }
}

