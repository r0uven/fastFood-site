"use strict";
function drawCards(){
    for (let i = 0; i < 50; i++) {

        let mainReference = document.getElementById("main")
    
        let divContainer = document.createElement("div")
        divContainer.className = "container"
    
        let containerSubwayImg = document.createElement("div")
        containerSubwayImg.className = "subway-img"
        containerSubwayImg.textContent = `s`
        divContainer.append(containerSubwayImg)
    
        let containerFoodImg = document.createElement("div")
        containerFoodImg.className = "food-img"
        containerFoodImg.textContent = "lorem"
        divContainer.append(containerFoodImg)
    
        let containerP = document.createElement("p")
        containerP.textContent = "Lorem"
        divContainer.append(containerP)
    
        let containerHr = document.createElement("hr")
        divContainer.append(containerHr)
    
        let containerSelectorOfIngredients = document.createElement("p")
        containerSelectorOfIngredients.className = "selector-of-ingredients"
        containerSelectorOfIngredients.textContent = "lorem"
        divContainer.append(containerSelectorOfIngredients)
    
    
        let containerHrCopy = document.createElement("hr")
        divContainer.append(containerHrCopy)
    
        let containerPrice = document.createElement("p")
        containerPrice.textContent = "Цена: lorem"
        containerPrice.className = "price"
        divContainer.append(containerPrice)
    
        let containerQuantityChoiceLabel = document.createElement("p")
        containerQuantityChoiceLabel.textContent = "КОЛИЧЕСТВО"
        containerQuantityChoiceLabel.className = "quantity-choice-label"
        divContainer.append(containerQuantityChoiceLabel)
    
        let containerAmountMinusPlus = document.createElement("div")
        containerAmountMinusPlus.className = "amount-minus-plus"
    
        let buttonMinus = document.createElement("button")
        buttonMinus.textContent = "-"
        containerAmountMinusPlus.append(buttonMinus)
    
        let amount = document.createElement("div")
        amount.className = "amount"
        let amountContent = document.createElement("div")
        amountContent.textContent = "1"
        amount.append(amountContent)
        containerAmountMinusPlus.append(amount)
    
        let buttonPlus = document.createElement("button")
        buttonPlus.textContent = "+"
        containerAmountMinusPlus.append(buttonPlus)
    
        divContainer.append(containerAmountMinusPlus)
    
        let containerAddButton = document.createElement("button")
        containerAddButton.textContent = "В КОРЗИНУ"
        containerAddButton.className = "add-button"
        divContainer.append(containerAddButton)
    
        mainReference.append(divContainer)
    }
}
function clearCards(){
    let main = document.getElementById("main")
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

document.querySelector("#shaurma-button").onclick = function(){
    clearCards()
    drawCards()
}
document.querySelector("#sandwich").onclick = function(){
    clearCards()
    drawCards()
}
