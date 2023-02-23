var bronzePack = document.querySelector(".bronzePack");
bronzePack.addEventListener("click", openCard);
function openCard(e) {
    e.preventDefault();
    console.log("Bronze Pack Func Activated");
    var _loop_1 = function (i) {
        var cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = "\n        <img class = \"front\" src=\"" + commonCards[randomNumbers[i]].cardFace + "\">\n        <img class = \"back\" src=\"./projectPhotos/cardBack.PNG\">";
        console.log(cardElement);
        openedPackContainer.appendChild(cardElement);
        if (cardElement) {
            cardElement.addEventListener("click", function () {
                cardElement.classList.add("flipped");
            });
        }
    };
    for (var i = 0; i < 5; i++) {
        _loop_1(i);
    }
}
