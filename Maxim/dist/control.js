// let counter = 2000
// const coinsCounter= document.querySelector(".counter")!
// coinsCounter.textContent = "Coins: " +counter
// const cardContainer = document.querySelector(".packContainer")!
// cardContainer.innerHTML = `
// <div class= "mainPack">
// <img class = "packOne" src="${cards[0].cardBack}">
// </div>
// `
// const packOnClick= document.querySelector(".packOne") as HTMLImageElement
// packOnClick.addEventListener("click", showCards)
// //showing the cards after click on pack + Coins counter
// // function showCards(e){
// //     try {
// //         e.preventDefault()
// // console.log("Function showCard activated");
// // document.querySelector(".cardContainer")!.innerHTML=`
// // <div class= "randomCards">
// // <img class="cardImage" src="${cards[randomNumber()].cardFace}"></div>
// // `
// //     } catch (error) {
// //         console.error(error)
// //     }
// // counter = counter-200
// // coinsCounter.textContent = "Coins: " +counter
// // if(counter == 0){
// //     timeMsg()
// //     packOnClick.removeEventListener("click", showCards)
// // return
// // }
// // }
// function showCards(e) {
//       e.preventDefault();
//       // Get a random card from the cards array
//       const card = cards[randomNumber()];
//       divChiledImgCreator()
//       //push to new userCards array
//       userCards.push(card)
//       //save new usercards array in local storage
//       const cardImagesString = JSON.stringify(userCards);
//       localStorage.setItem("userCards", cardImagesString);
//     // Update the coin counter
//     counter = counter - 400;
//     coinsCounter.textContent = "Coins: " + counter;
//     // Disable the pack if the user has no coins left
//     if (counter == 0) {
//       timeMsg();
//       packOnClick.removeEventListener("click", showCards);
//     }
//   }
var bronzePack = document.querySelector(".bronzePack");
bronzePack.addEventListener("click", openCard);
function openCard(e) {
    e.preventDefault();
    console.log("Bronze Pack Func Activated");
    var _loop_1 = function (i) {
        var cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = "\n        <img class = \"front\" src=\"" + commonCards[randomNumbers[i]].cardFace + "\">\n        <img class = \"back\" src=\"" + commonCards[randomNumbers[i]].cardBack + "\">";
        console.log(cardElement);
        openedPackContainer.appendChild(cardElement);
        if (cardElement) {
            cardElement.addEventListener("click", function () {
                cardElement.classList.add("flipped");
            });
        }
    };
    for (var i = 0; i < 5; i++) {
        _loop_1(i);
    }
}
function generateRandomNumbers() {
    var numbers = [];
    while (numbers.length < 5) {
        var random = Math.floor(Math.random() * (30 - 0)) + 0;
        if (!numbers.includes(random)) {
            numbers.push(random);
        }
    }
    return numbers;
}
var randomNumbers = generateRandomNumbers();
