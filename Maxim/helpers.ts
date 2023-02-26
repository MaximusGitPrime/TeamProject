function randomNumber(){
    let number = Math.floor(Math.random()*(30-0)+0)
    console.log(number);
    
    return number
}
//alert message with delay//////////
function timeMsg()
{
const t=setTimeout("alertMsg()",300);
}
function alertMsg()
{
alert("No More Coins");
}
///////////////////////////////

const test = 0



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
