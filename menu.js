"use strict";

let nav = document.querySelector("nav")
let navButtons = nav.querySelectorAll("button")

//Перекрашивание обратно
function nonActive(active){
    navButtons.forEach(element => {
        if(active === element){
        
        }else{
            element.style.background = "white"
            element.style.color = "black"
        }
    });
}


//Отслежвание всех кнопок в навигации
(function Example() {
  
    navButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        btn.style.background = "#f6d000"
        btn.style.color = "white"
        nonActive(btn)
      });
    })
}());

//hover и active из css
navButtons.forEach(element => {
    element.addEventListener('mouseover', () => {
        if(element.style.background != "rgb(246, 208, 0)")
        {
            element.style.background = '#f5d102';
            element.style.color = "white"
        }
        element.addEventListener('mousedown', () => {

            element.style.background = '#f5e37a';
            element.style.color = "white"
        
        });
        element.addEventListener('mouseout', () => {
            if(element.style.background != "rgb(246, 208, 0)")
            {
                element.style.background = 'white';
                element.style.color = "black"
            }    
        });
    });
});