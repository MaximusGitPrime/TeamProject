var currentUserString = localStorage.getItem('current_user');
var userCardsFromLocalStorage = localStorage.getItem(currentUserString + ".cards");
var userCards = JSON.parse(userCardsFromLocalStorage);
var imgArray = [];
var containerCard = document.querySelectorAll(".container__card");
function showCardsInAlbum() {
    for (var i = 1; i < containerCard.length + 1; i++) {
        var img = document.getElementById("" + i);
        imgArray.push(img);
    }
    for (var i = 0; i < imgArray.length + 1; i++) {
        for (var j = 0; j < userCards.length; j++) {
            if (imgArray[i].id == userCards[j].cardId) {
                imgArray[i].src = userCards[j].cardFace;
            }
        }
    }
}
showCardsInAlbum();
