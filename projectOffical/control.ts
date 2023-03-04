const openedPackContainer = document.querySelector(".packdCardContainer") as HTMLDivElement
const packStoreContainer = document.querySelector(".packStoreContainer") as HTMLDivElement;
const bronzePack = document.querySelector(".bronzePack") as HTMLDivElement;
const silverPack = document.querySelector(".silverPack") as HTMLDivElement;
const goldPack = document.querySelector(".goldPack") as HTMLDivElement;
const sendToAlbumBtn  = document.querySelector("#sendBtn") as HTMLDivElement;
const openAlbumBtn = document.querySelector(".albumBtn")  as HTMLDivElement;
const albumContainer = document.querySelector(".albumContainer") as HTMLDivElement;


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

  let pack: Card[];
  
bronzePack.addEventListener("click", () => {
  openedPackContainer.classList.remove("hide")

  pack = generatePack(cards, "bronze");
  displayPack(pack);
});

silverPack.addEventListener("click", () => {
  pack = generatePack(cards, "silver");
  displayPack(pack);
});

goldPack.addEventListener("click", () => {
  pack = generatePack(cards, "gold");
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
 
  return pack;

}

// function sendToAlbum(e){
//   e.preventDefault()
//   console.log("send to album activated");
  
//   const existingCardsString = localStorage.getItem('current_user_cards');
//   const existingCards = existingCardsString ? JSON.parse(existingCardsString) : [];
//   const updatedCards = existingCards.concat(pack);

//   localStorage.setItem('current_user_cards', JSON.stringify(updatedCards));
// }
function handleBackToPacksStore(e){
    e.preventDefault()
    sendToAlbumBtn.classList.add("hide")
    console.log("Send Button function activated");

    // mtn changes to save to local storage -->
    const currentUser = localStorage.getItem('current_user');
    const existingCardsString = localStorage.getItem(`${currentUser}.cards`);
    const existingCards = existingCardsString ? JSON.parse(existingCardsString) : [];
    const updatedCards = existingCards.concat(pack);
    localStorage.setItem(`${currentUser}.cards`, JSON.stringify(updatedCards));
    
    // end of changes -->
  
    openedPackContainer.innerHTML = ""
    packStoreContainer.classList.remove("hide")

}
 function openAlbum(e){
  e.preventDefault()
  console.log("openAlbum function activated");

  if(packStoreContainer.classList.contains("hide") &&  albumContainer.classList.contains("hide") ){
    alert("First Send your cards to Album")
  }
  else{
    packStoreContainer.classList.add("hide")
    albumContainer.classList.remove("hide")
  }
  
 if (!albumContainer.classList.contains("hide")){
  openAlbumBtn.onclick = null
  }
  
 }
//heaara