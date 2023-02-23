var counter = 2000;
var coinsCounter = document.querySelector(".counter");
coinsCounter.textContent = "Coins: " + counter;
var cardContainer = document.querySelector(".packContainer");
cardContainer.innerHTML = "\n<div class= \"mainPack\">\n<img class = \"packOne\" src=\"" + cards[0].cardBack + "\">\n</div>\n\n";
var packOnClick = document.querySelector(".packOne");
packOnClick.addEventListener("click", showCards);
//showing the cards after click on pack + Coins counter
// function showCards(e){
//     try {
//         e.preventDefault()
// console.log("Function showCard activated");
// document.querySelector(".cardContainer")!.innerHTML=`
// <div class= "randomCards">
// <img class="cardImage" src="${cards[randomNumber()].cardFace}"></div>
// `
//     } catch (error) {
//         console.error(error)
//     }
// counter = counter-200
// coinsCounter.textContent = "Coins: " +counter
// if(counter == 0){
//     timeMsg()
//     packOnClick.removeEventListener("click", showCards)
// return
// }
// }
function showCards(e) {
    e.preventDefault();
    // Get a random card from the cards array
    var card = cards[randomNumber()];
    divChiledImgCreator();
    //push to new userCards array
    userCards.push(card);
    //save new usercards array in local storage
    var cardImagesString = JSON.stringify(userCards);
    localStorage.setItem("userCards", cardImagesString);
    // Update the coin counter
    counter = counter - 400;
    coinsCounter.textContent = "Coins: " + counter;
    // Disable the pack if the user has no coins left
    if (counter == 0) {
        timeMsg();
        packOnClick.removeEventListener("click", showCards);
    }
}
