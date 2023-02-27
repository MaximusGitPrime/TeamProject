const bronzePack = document.querySelector(".bronzePack")!
const silverPack = document.querySelector(".silverPack")!
const goldPack = document.querySelector(".goldPack")!
bronzePack.addEventListener("click", openBronzeCard)
silverPack.addEventListener("click", openSilverCard)
goldPack.addEventListener("click", openGoldCard)

function openBronzeCard(e){
    e.preventDefault()

 console.log( getRandomCard(Reraty.COMMON,commonCards,4));

    console.log("Bronze Pack Func Activated 1");
    
    for( let i = 0 ; i < 4 ; i++){
        const cardElement = document.createElement("div")
        cardElement.classList.add("card")
        cardElement.innerHTML = `
        <img class = "front" src="${commonCards[randomNumbers[i]].cardFace}">
        <img class = "back" src="./projectPhotos/cardBack.PNG">`
        openedPackContainer.appendChild(cardElement)

        if(cardElement){
        cardElement.addEventListener("click" , ()=>{
            cardElement.classList.add("flipped")
        })
        
    }
    openedPackContainer.appendChild(cardElement)
}
const cardRareElement = document.createElement("div")
cardRareElement.classList.add("card")
cardRareElement.innerHTML = `
        <img class = "front" src="${rareCards[rareRandomNumbers[0]].cardFace}">
        <img class = "back" src="./projectPhotos/cardBack.PNG">`
        openedPackContainer.appendChild(cardRareElement)
        if(cardRareElement){
            cardRareElement.addEventListener("click" , ()=>{
                cardRareElement.classList.add("flipped")
            })
}
}

function openSilverCard(e){
    e.preventDefault()
    console.log("Silver Pack Func Activated");
    
    for( let i = 0 ; i < 3 ; i++){
        const cardElement = document.createElement("div")
        cardElement.classList.add("card")
        cardElement.innerHTML = `
        <img class = "front" src="${commonCards[randomNumbers[i]].cardFace}">
        <img class = "back" src="./projectPhotos/cardBack.PNG">`
        openedPackContainer.appendChild(cardElement)

        if(cardElement){
        cardElement.addEventListener("click" , ()=>{
            cardElement.classList.add("flipped")
        })
        
    }
    openedPackContainer.appendChild(cardElement)
}
for(let i =0; i<2; i++){
const cardRareElement = document.createElement("div")
cardRareElement.classList.add("card")
cardRareElement.innerHTML = `
        <img class = "front" src="${rareCards[rareRandomNumbers[i]].cardFace}">
        <img class = "back" src="./projectPhotos/cardBack.PNG">`
    
        openedPackContainer.appendChild(cardRareElement)
        if(cardRareElement){
            cardRareElement.addEventListener("click" , ()=>{
                cardRareElement.classList.add("flipped")
                
            })
    }
}
}
function openGoldCard(e){
    e.preventDefault()
    console.log("Gold Pack Func Activated");
    
    for( let i = 0 ; i < 5 ; i++){
        const cardElement = document.createElement("div")
        cardElement.classList.add("card")
        cardElement.innerHTML = `
        <img class = "front" src="${rareCards[rareRandomNumbers[i]].cardFace}">
        <img class = "back" src="./projectPhotos/cardBack.PNG">`
        openedPackContainer.appendChild(cardElement)

        if(cardElement){
        cardElement.addEventListener("click" , ()=>{
            cardElement.classList.add("flipped")
        })
        
}
    openedPackContainer.appendChild(cardElement)
}
}
