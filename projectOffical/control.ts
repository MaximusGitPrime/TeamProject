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
    const currentUser = localStorage.getItem('current_user');
    const currentCoins = parseInt(localStorage.getItem(currentUser + '.coins'));
    const packCost = 1000;
  
    if (currentCoins >= packCost) {
      // mtn-changes ----  subtract the pack cost from the user's coins
      const newCoins = currentCoins - packCost;
      localStorage.setItem(currentUser + '.coins', newCoins);
  
      // generate and display the pack
      openedPackContainer.classList.remove("hide");
      let pack = generatePack(cards, "bronze");
      displayPack(pack);
  
      sendToAlbumBtn.addEventListener("click", () => {
        const existingCardsString = localStorage.getItem(`${currentUser}.cards`);
        const existingCards = existingCardsString ? JSON.parse(existingCardsString) : [];
        const updatedCards = existingCards.concat(pack);
        localStorage.setItem(`${currentUser}.cards`, JSON.stringify(updatedCards));
        sendToAlbumBtn.classList.add("hide");
        openedPackContainer.classList.add("hide");
        openedPackContainer.innerHTML = "";
        packStoreContainer.classList.remove("hide");
        pack = [];
        count = 0;
      });
      
    } else {
      Swal.fire({
        title: "Not enough coins!",
        text: "You do not have enough coins to purchase this pack.",
        icon: "error",
        button: "OK",
      }).then(() => {
        packStoreContainer.classList.add("hide");
        pricingTable.classList.remove("hide")
      });
    }
  });
    

silverPack.addEventListener("click", () => {
  const currentUser = localStorage.getItem('current_user');
  const currentCoins = parseInt(localStorage.getItem(currentUser + '.coins'));
  const packCost = 2500;

  if (currentCoins >= packCost) {
    // mtn-changes ---- subtract the pack cost from the user's coins
    const newCoins = currentCoins - packCost;
    localStorage.setItem(currentUser + '.coins', newCoins);

    // generate and display the pack
    openedPackContainer.classList.remove("hide");
    let pack = generatePack(cards, "silver");
    displayPack(pack);


    sendToAlbumBtn.addEventListener("click", () => {
      const existingCardsString = localStorage.getItem(`${currentUser}.cards`);
      const existingCards = existingCardsString ? JSON.parse(existingCardsString) : [];
      const updatedCards = existingCards.concat(pack);
      localStorage.setItem(`${currentUser}.cards`, JSON.stringify(updatedCards));
      sendToAlbumBtn.classList.add("hide");
      openedPackContainer.innerHTML = "";
      packStoreContainer.classList.remove("hide");
      pack = [];
      count = 0;
    });
    
  } else {
    Swal.fire({
      title: "Not enough coins!",
      text: "You do not have enough coins to purchase this pack.",
      icon: "error",
      button: "OK",
    }).then(() => {
      packStoreContainer.classList.add("hide");
      pricingTable.classList.remove("hide")
    });
  }
});

goldPack.addEventListener("click", () => {
  const currentUser = localStorage.getItem('current_user');
  const currentCoins = parseInt(localStorage.getItem(currentUser + '.coins'));
  const packCost = 5000;

  if (currentCoins >= packCost) {
    // mtn-changes ---- subtract the pack cost from the user's coins
    const newCoins = currentCoins - packCost;
    localStorage.setItem(currentUser + '.coins', newCoins);

    // generate and display the pack
    openedPackContainer.classList.remove("hide");
    let pack = generatePack(cards, "gold");
    displayPack(pack);

    sendToAlbumBtn.addEventListener("click", () => {
      const existingCardsString = localStorage.getItem(`${currentUser}.cards`);
      const existingCards = existingCardsString ? JSON.parse(existingCardsString) : [];
      const updatedCards = existingCards.concat(pack);
      localStorage.setItem(`${currentUser}.cards`, JSON.stringify(updatedCards));
      sendToAlbumBtn.classList.add("hide");
      openedPackContainer.innerHTML = "";
      packStoreContainer.classList.remove("hide");
      pack = [];
      count = 0;
    });
    
  } else {
    Swal.fire({
      title: "Not enough coins!",
      text: "You do not have enough coins to purchase this pack.",
      icon: "error",
      button: "OK",
    }).then(() => {
      packStoreContainer.classList.add("hide");
      pricingTable.classList.remove("hide")
    });
  }
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

// function handleBackToPacksStore(e){
//     e.preventDefault()
//     sendToAlbumBtn.classList.add("hide")
//     console.log("Send Button function activated");

//     // mtn changes to save to local storage -->
//     const currentUser = localStorage.getItem('current_user');
//     const existingCardsString = localStorage.getItem(`${currentUser}.cards`);
//     const existingCards = existingCardsString ? JSON.parse(existingCardsString) : [];
//     const updatedCards = existingCards.concat(pack);
//     localStorage.setItem(`${currentUser}.cards`, JSON.stringify(updatedCards));
    
//     // end of changes -->
  
//     openedPackContainer.innerHTML = ""
//     packStoreContainer.classList.remove("hide")

TopUpBtn.addEventListener("click", () => {
  packStoreContainer.classList.add("hide");
  pricingTable.classList.remove("hide");
});


function buyCoins(amount) {
  const currentUser = localStorage.getItem('current_user');
  const currentCoins = parseInt(localStorage.getItem(`${currentUser}.coins`)) || 0;
  const newCoins = currentCoins + amount;
  localStorage.setItem(`${currentUser}.coins`, newCoins);
  Swal.fire({
    title: 'Purchase Successful!',
    text: `You have successfully purchased ${amount} coins!`,
    icon: 'success',
    confirmButtonText: 'OK'
  });
}



    
      goToAlbumBtn.addEventListener("click" , ()=>{
        if(openedPackContainer.classList.contains("hide")){
        albumContainer.classList.remove("hide")
        packStoreContainer.classList.add("hide")
        }else{
          alert("You need to send your cards to album first")
        }
      })
    

      goToStoreBtn.addEventListener("click" , ()=>{
          if(openedPackContainer.classList.contains("hide")){
            albumContainer.classList.add("hide")
            packStoreContainer.classList.remove("hide")
          }else{
            alert("You need to send your cards to album first")
          }
      })
    
  


    


//heaara