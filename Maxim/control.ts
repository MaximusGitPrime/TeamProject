let counter = 2000
const coinsCounter= document.querySelector(".counter")!
coinsCounter.textContent = "Coins: " +counter

const cardContainer = document.querySelector(".packContainer")!
cardContainer.innerHTML = `
<div class= "mainPack">
<img class = "packOne" src="${cards[0].cardBack}">
</div>

`
const packOnClick= document.querySelector(".packOne") as HTMLImageElement
packOnClick.addEventListener("click", showCards)

// showing the cards after click on pack + Coins counter
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
      console.log("Function showCard activated");
  
      // Get a random card from the cards array
      const card = cards[randomNumber()];
  
      // Create a new Faceimg element for the card
      const cardImage = document.createElement("img");
      cardImage.classList.add("front");
      cardImage.src = card.cardFace;

      // Create a new backimg element for the card

      const cardBackImage = document.createElement("img");
      cardBackImage.classList.add("back");
      cardBackImage.src = card.cardBack;
  
      // Append the card image to the .cardContainer element
      const cardContainer = document.querySelector(".cardContainer")!;
      cardContainer.appendChild(cardImage);
      cardContainer.appendChild(cardBackImage);

      //push to new userCards array
      userCards.push(card)

      //save new usercards array in local storage
      const cardImagesString = JSON.stringify(userCards);
      localStorage.setItem("userCards", cardImagesString);
  
    // Update the coin counter
    counter = counter - 400;
    coinsCounter.textContent = "Coins: " + counter;
  
    // Disable the pack if the user has no coins left
    if (counter == 0) {
      timeMsg();
      packOnClick.removeEventListener("click", showCards);
      return;
    }
  }