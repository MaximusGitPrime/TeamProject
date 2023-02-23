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
  const backdiv = document.createElement("div");
  backdiv.classList.add("cardFace", "back");
  cardDiv.appendChild(backdiv)
  const backImg = document.createElement("img")
  backImg.src = card.cardBack;
  backdiv.appendChild(backImg)

  const facediv = document.createElement("div");
  facediv.classList.add("cardFace", "face");
  cardDiv.appendChild(facediv)
  const faceImg = document.createElement("img")
  faceImg.src = card.cardFace;
  facediv.appendChild(faceImg)

  
  }

const cardToFlip = document.querySelector(".card")!
if (cardToFlip){
  cardToFlip.addEventListener("click", cardFlip)
}

function cardFlip(e){
  console.log("Card flip func activted");
  e.preventDefault()
  
this.document.querySelector(".card")!.classList.replace("card","fliped")
}


 