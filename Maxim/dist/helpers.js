function randomNumber() {
    var number = Math.floor(Math.random() * (30 - 0) + 0);
    console.log(number);
    return number;
}
//alert message with delay//////////
function timeMsg() {
    var t = setTimeout("alertMsg()", 300);
}
function alertMsg() {
    alert("No More Coins");
}
///////////////////////////////
//creating Div and Images elements on the DOM
function divChiledImgCreator() {
    var cardContainer = document.querySelector(".cardContainer");
    var card = cards[randomNumber()];
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardContainer.appendChild(cardDiv);
    var backdiv = document.createElement("div");
    backdiv.classList.add("cardFace", "back");
    cardDiv.appendChild(backdiv);
    var backImg = document.createElement("img");
    backImg.src = card.cardBack;
    backdiv.appendChild(backImg);
    var facediv = document.createElement("div");
    facediv.classList.add("cardFace", "face");
    cardDiv.appendChild(facediv);
    var faceImg = document.createElement("img");
    faceImg.src = card.cardFace;
    facediv.appendChild(faceImg);
}
var cardToFlip = document.querySelector(".card");
if (cardToFlip) {
    cardToFlip.addEventListener("click", cardFlip);
}
function cardFlip(e) {
    console.log("Card flip func activted");
    e.preventDefault();
    this.document.querySelector(".card").classList.replace("card", "fliped");
}
