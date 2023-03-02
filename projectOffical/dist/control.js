var openedPackContainer = document.querySelector(".packdCardContainer");
var packStoreContainer = document.querySelector(".packStoreContainer");
var bronzePack = document.querySelector(".bronzePack");
var silverPack = document.querySelector(".silverPack");
var goldPack = document.querySelector(".goldPack");
var sendToAlbumBtn = document.querySelector("#sendBtn");
function displayPack(pack) {
    var count = 0;
    var _loop_1 = function (card) {
        var cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = "\n        <img class=\"front\" src=\"" + card.cardFace + "\">\n        <img class=\"back\" src=\"./projectPhotos/cardBack.PNG\">\n      ";
        cardElement.addEventListener("click", function () {
            cardElement.classList.add("flipped");
            count++;
            console.log(count);
            if (count == 5) {
                sendToAlbumBtn.classList.remove("hide");
            }
        });
        openedPackContainer.appendChild(cardElement);
    };
    for (var _i = 0, pack_1 = pack; _i < pack_1.length; _i++) {
        var card = pack_1[_i];
        _loop_1(card);
    }
    packStoreContainer.classList.add("hide");
}
bronzePack.addEventListener("click", function () {
    openedPackContainer.classList.remove("hide");
    var pack = generatePack(cards, "bronze");
    displayPack(pack);
});
silverPack.addEventListener("click", function () {
    var pack = generatePack(cards, "silver");
    displayPack(pack);
});
goldPack.addEventListener("click", function () {
    var pack = generatePack(cards, "gold");
    displayPack(pack);
});
function generatePack(cards, packType) {
    var regularCardsCount = 0;
    var specialCardsCount = 0;
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
    var pack = [];
    var regularCards = cards.filter(function (card) { return card.cardType === "common"; });
    var specialCards = cards.filter(function (card) { return card.cardType === "rare"; });
    // Add regular cards to the pack
    for (var i = 0; i < regularCardsCount; i++) {
        var index = Math.floor(Math.random() * regularCards.length);
        pack.push(regularCards[index]);
        regularCards.splice(index, 1);
    }
    // Add special cards to the pack
    for (var i = 0; i < specialCardsCount; i++) {
        var index = Math.floor(Math.random() * specialCards.length);
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
function hadleBackToPacksStore(e) {
    e.preventDefault();
    sendToAlbumBtn.classList.add("hide");
    console.log("Send Button function activatted");
    openedPackContainer.innerHTML = "";
    // openedPackContainer.classList.toggle("hide")
    packStoreContainer.classList.remove("hide");
}
