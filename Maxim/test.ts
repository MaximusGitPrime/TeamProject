class Card{
    id:number
    category:string
    face:string
    back:string
    
    constructor(
        public cardId:number,
        public cardCategory:string,
        public cardFace:string,
        public cardBack:string
    ){}
}


const cards:Card[]=[
    new Card(1,"common","./projectPhotos/1.PNG","./projectPhotos/cardBack.PNG"),
    new Card(2,"common","./projectPhotos/2.PNG","./projectPhotos/cardBack.PNG"),
    new Card(3,"common","./projectPhotos/3.PNG","./projectPhotos/cardBack.PNG"),
    new Card(4,"common","./projectPhotos/4.PNG","./projectPhotos/cardBack.PNG"),
    new Card(5,"common","./projectPhotos/5.PNG","./projectPhotos/cardBack.PNG"),
    new Card(6,"common","./projectPhotos/6.PNG","./projectPhotos/cardBack.PNG"),
    new Card(7,"common","./projectPhotos/7.PNG","./projectPhotos/cardBack.PNG"),
    new Card(8,"common","./projectPhotos/8.PNG","./projectPhotos/cardBack.PNG"),
    new Card(9,"common","./projectPhotos/9.PNG","./projectPhotos/cardBack.PNG"),
    new Card(10,"common","./projectPhotos/10.PNG","./projectPhotos/cardBack.PNG"),
    new Card(11,"common","./projectPhotos/11.PNG","./projectPhotos/cardBack.PNG"),
    new Card(12,"common","./projectPhotos/12.PNG","./projectPhotos/cardBack.PNG"),
    new Card(13,"common","./projectPhotos/13.PNG","./projectPhotos/cardBack.PNG"),
    new Card(14,"common","./projectPhotos/14.PNG","./projectPhotos/cardBack.PNG"),
    new Card(15,"common","./projectPhotos/15.PNG","./projectPhotos/cardBack.PNG"),
    new Card(16,"common","./projectPhotos/16.PNG","./projectPhotos/cardBack.PNG"),
    new Card(17,"common","./projectPhotos/17.PNG","./projectPhotos/cardBack.PNG"),
    new Card(18,"common","./projectPhotos/18.PNG","./projectPhotos/cardBack.PNG"),
    new Card(19,"common","./projectPhotos/19.PNG","./projectPhotos/cardBack.PNG"),
    new Card(20,"common","./projectPhotos/20.PNG","./projectPhotos/cardBack.PNG"),
    new Card(21,"common","./projectPhotos/21.PNG","./projectPhotos/cardBack.PNG"),
    new Card(22,"common","./projectPhotos/22.PNG","./projectPhotos/cardBack.PNG"),
    new Card(23,"common","./projectPhotos/23.PNG","./projectPhotos/cardBack.PNG"),
    new Card(24,"common","./projectPhotos/24.PNG","./projectPhotos/cardBack.PNG"),
    new Card(25,"common","./projectPhotos/25.PNG","./projectPhotos/cardBack.PNG"),
    new Card(26,"common","./projectPhotos/26.PNG","./projectPhotos/cardBack.PNG"),
    new Card(27,"common","./projectPhotos/27.PNG","./projectPhotos/cardBack.PNG"),
    new Card(28,"common","./projectPhotos/28.PNG","./projectPhotos/cardBack.PNG"),
    new Card(29,"common","./projectPhotos/29.PNG","./projectPhotos/cardBack.PNG"),
    new Card(30,"common","./projectPhotos/30.PNG","./projectPhotos/cardBack.PNG"),
]


const userCards:Card[]=[]


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
  
      // Get a random card from the cards array
      const card = cards[randomNumber()];
      divChiledImgCreator()

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
      
    }


  }
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
//creating Div and Images elements on the DOM
function divChiledImgCreator(){
    const cardContainer = document.querySelector(".cardContainer")!;
    const card = cards[randomNumber()];

const cardDiv = document.createElement("div")
cardDiv.classList.add("card")
cardContainer.appendChild(cardDiv)
  const cardBackdiv = document.createElement("div");
  cardBackdiv.classList.add("cardFace", "cardBack");
  cardDiv.appendChild(cardBackdiv)
  const cardBackImg = document.createElement("img")
  cardBackImg.src = card.cardFace;
  cardBackdiv.appendChild(cardBackImg)

  const cardFrontdiv = document.createElement("div");
  cardFrontdiv.classList.add("cardFace", "cardFront");
  cardDiv.appendChild(cardFrontdiv)
  const cardFrontImg = document.createElement("img")
  cardFrontImg.src = card.cardBack;
  cardFrontdiv.appendChild(cardFrontImg)
  
  }
