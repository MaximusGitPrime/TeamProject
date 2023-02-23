var packContainer = document.querySelector(".packContainer");
var Card = /** @class */ (function () {
    function Card(cardId, cardCategory, cardFace, cardBack) {
        this.cardId = cardId;
        this.cardCategory = cardCategory;
        this.cardFace = cardFace;
        this.cardBack = cardBack;
    }
    return Card;
}());
var cards = [
    new Card(1, "common", "./projectPhotos/1.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(2, "common", "./projectPhotos/2.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(3, "common", "./projectPhotos/3.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(4, "common", "./projectPhotos/4.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(5, "common", "./projectPhotos/5.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(6, "common", "./projectPhotos/6.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(7, "common", "./projectPhotos/7.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(8, "common", "./projectPhotos/8.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(9, "common", "./projectPhotos/9.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(10, "common", "./projectPhotos/10.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(11, "common", "./projectPhotos/11.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(12, "common", "./projectPhotos/12.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(13, "common", "./projectPhotos/13.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(14, "common", "./projectPhotos/14.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(15, "common", "./projectPhotos/15.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(16, "common", "./projectPhotos/16.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(17, "common", "./projectPhotos/17.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(18, "common", "./projectPhotos/18.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(19, "common", "./projectPhotos/19.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(20, "common", "./projectPhotos/20.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(21, "common", "./projectPhotos/21.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(22, "common", "./projectPhotos/22.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(23, "common", "./projectPhotos/23.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(24, "common", "./projectPhotos/24.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(25, "common", "./projectPhotos/25.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(26, "common", "./projectPhotos/26.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(27, "common", "./projectPhotos/27.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(28, "common", "./projectPhotos/28.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(29, "common", "./projectPhotos/29.PNG", "./projectPhotos/cardBack.PNG"),
    new Card(30, "common", "./projectPhotos/30.PNG", "./projectPhotos/cardBack.PNG"),
];
cards.forEach(function (card) {
    var cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = "\n    <img class = \"front\" src=\"" + card.cardFace + "\">\n    <img class = \"back\" src=\"" + card.cardBack + "\">";
    cardElement.addEventListener("click", function () {
        cardElement.classList.add("flipped");
    });
    packContainer.appendChild(cardElement);
});
