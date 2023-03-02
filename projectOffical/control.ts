const openedPackContainer = document.querySelector(".packdCardContainer") as HTMLDivElement
const packStoreContainer = document.querySelector(".packStoreContainer") as HTMLDivElement;
const bronzePack = document.querySelector(".bronzePack") as HTMLDivElement;
const silverPack = document.querySelector(".silverPack") as HTMLDivElement;
const goldPack = document.querySelector(".goldPack") as HTMLDivElement;
const sendToAlbumBtn  = document.querySelector("#sendBtn") as HTMLDivElement;


function displayPack(pack: Card[]) {
  let count = 0
    for (const card of pack) {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.innerHTML = `
        <img class="front" src="${card.cardFace}">
        <img class="back" src="./projectPhotos/cardBack.PNG">
      `;
      cardElement.addEventListener("click", () => {
        cardElement.classList.add("flipped");
        count++
        console.log(count);
        
        if(count ==5){
          
          sendToAlbumBtn.classList.remove("hide")
          
        }
    
        
      });



      openedPackContainer.appendChild(cardElement);
    }
    packStoreContainer.classList.add("hide")
  }
  
bronzePack.addEventListener("click", () => {
  openedPackContainer.classList.remove("hide")

  const pack = generatePack(cards, "bronze");
  displayPack(pack);
});

silverPack.addEventListener("click", () => {
  const pack = generatePack(cards, "silver");
  displayPack(pack);
});

goldPack.addEventListener("click", () => {
  const pack = generatePack(cards, "gold");
  displayPack(pack);
});

function generatePack(cards: Card[], packType: string): Card[] {
  let regularCardsCount = 0;
  let specialCardsCount = 0;

  switch (packType) {
    case "bronze":
      regularCardsCount = 4;
      specialCardsCount = 1;
      break;
    case "silver":
      regularCardsCount = 3;
      specialCardsCount = 2;
      break;
    case "gold":
      regularCardsCount = 0;
      specialCardsCount = 5;
      break;
    default:
      throw new Error("Invalid pack type");
  }

  const pack: Card[] = [];
  const regularCards = cards.filter((card) => card.cardType === "common");
  const specialCards = cards.filter((card) => card.cardType === "rare");

  // Add regular cards to the pack
  for (let i = 0; i < regularCardsCount; i++) {
    const index = Math.floor(Math.random() * regularCards.length);
    pack.push(regularCards[index]);
    regularCards.splice(index, 1);
  }

  // Add special cards to the pack
  for (let i = 0; i < specialCardsCount; i++) {
    const index = Math.floor(Math.random() * specialCards.length);
    pack.push(specialCards[index]);
    specialCards.splice(index, 1);
  }
  localStorage.setItem("current_User", JSON.stringify(pack));
 
  return pack;

}

// function sendToAlbum(e){
//   e.preventDefault()
//   console.log("send to album activated");
  
// }
function hadleBackToPacksStore(e){
    e.preventDefault()
    sendToAlbumBtn.classList.add("hide")
    console.log("Send Button function activatted");
    openedPackContainer.innerHTML = ""
    // openedPackContainer.classList.toggle("hide")
    packStoreContainer.classList.remove("hide")

}
