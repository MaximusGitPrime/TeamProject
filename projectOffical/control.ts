const bronzePack = document.querySelector(".bronzePack")!
bronzePack.addEventListener("click", openCard)

function openCard(e){
    e.preventDefault()
    console.log("Bronze Pack Func Activated");
    generateRandomNumbers()    
    for( let i = 0 ; i < 5 ; i++){
        const cardElement = document.createElement("div")
        cardElement.classList.add("card")
        cardElement.innerHTML = `
        <img class = "front" src="${commonCards[randomNumbers[i]].cardFace}">
        <img class = "back" src="${commonCards[randomNumbers[i]].cardBack}">`
        console.log(cardElement);

        openedPackContainer.appendChild(cardElement)

        if(cardElement){
        cardElement.addEventListener("click" , ()=>{
            cardElement.classList.add("flipped")
        })
    }
}
    
}