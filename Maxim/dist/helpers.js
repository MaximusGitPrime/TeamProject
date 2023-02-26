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
var test = 0;
function openSilverCard(e) {
    e.preventDefault();
    console.log("Silver Pack Func Activated");
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
    for (var i = 0; i < 3; i++) {
        _loop_1(i);
    }
    var _loop_2 = function (i) {
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
        _loop_2(i);
    }
}
function openGoldCard(e) {
    e.preventDefault();
    console.log("Gold Pack Func Activated");
    var _loop_3 = function (i) {
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
        _loop_3(i);
    }
}
