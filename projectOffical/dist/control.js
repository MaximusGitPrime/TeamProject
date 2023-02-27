var bronzePack = document.querySelector(".bronzePack");
var silverPack = document.querySelector(".silverPack");
var goldPack = document.querySelector(".goldPack");
bronzePack.addEventListener("click", openBronzeCard);
silverPack.addEventListener("click", openSilverCard);
goldPack.addEventListener("click", openGoldCard);
function openBronzeCard(e) {
    e.preventDefault();
    console.log(getRandomCard(Reraty.COMMON, commonCards, 4));
    console.log("Bronze Pack Func Activated 1");
    var _loop_1 = function (i) {
        var cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = "\n        <img class = \"front\" src=\"" + commonCards[randomNumbers[i]].cardFace + "\">\n        <img class = \"back\" src=\"./projectPhotos/cardBack.PNG\">";
        openedPackContainer.appendChild(cardElement);
        if (cardElement) {
            cardElement.addEventListener("click", function () {
                cardElement.classList.add("flipped");
            });
        }
        openedPackContainer.appendChild(cardElement);
    };
    for (var i = 0; i < 4; i++) {
        _loop_1(i);
    }
    var cardRareElement = document.createElement("div");
    cardRareElement.classList.add("card");
    cardRareElement.innerHTML = "\n        <img class = \"front\" src=\"" + rareCards[rareRandomNumbers[0]].cardFace + "\">\n        <img class = \"back\" src=\"./projectPhotos/cardBack.PNG\">";
    openedPackContainer.appendChild(cardRareElement);
    if (cardRareElement) {
        cardRareElement.addEventListener("click", function () {
            cardRareElement.classList.add("flipped");
        });
    }
}
function openSilverCard(e) {
    e.preventDefault();
    console.log("Silver Pack Func Activated");
    var _loop_2 = function (i) {
        var cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = "\n        <img class = \"front\" src=\"" + commonCards[randomNumbers[i]].cardFace + "\">\n        <img class = \"back\" src=\"./projectPhotos/cardBack.PNG\">";
        openedPackContainer.appendChild(cardElement);
        if (cardElement) {
            cardElement.addEventListener("click", function () {
                cardElement.classList.add("flipped");
            });
        }
        openedPackContainer.appendChild(cardElement);
    };
    for (var i = 0; i < 3; i++) {
        _loop_2(i);
    }
    var _loop_3 = function (i) {
        var cardRareElement = document.createElement("div");
        cardRareElement.classList.add("card");
        cardRareElement.innerHTML = "\n        <img class = \"front\" src=\"" + rareCards[rareRandomNumbers[i]].cardFace + "\">\n        <img class = \"back\" src=\"./projectPhotos/cardBack.PNG\">";
        openedPackContainer.appendChild(cardRareElement);
        if (cardRareElement) {
            cardRareElement.addEventListener("click", function () {
                cardRareElement.classList.add("flipped");
            });
        }
    };
    for (var i = 0; i < 2; i++) {
        _loop_3(i);
    }
}
function openGoldCard(e) {
    e.preventDefault();
    console.log("Gold Pack Func Activated");
    var _loop_4 = function (i) {
        var cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = "\n        <img class = \"front\" src=\"" + rareCards[rareRandomNumbers[i]].cardFace + "\">\n        <img class = \"back\" src=\"./projectPhotos/cardBack.PNG\">";
        openedPackContainer.appendChild(cardElement);
        if (cardElement) {
            cardElement.addEventListener("click", function () {
                cardElement.classList.add("flipped");
            });
        }
        openedPackContainer.appendChild(cardElement);
    };
    for (var i = 0; i < 5; i++) {
        _loop_4(i);
    }
}
