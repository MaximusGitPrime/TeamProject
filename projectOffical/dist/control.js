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
var pack;
bronzePack.addEventListener("click", function () {
    var currentUser = localStorage.getItem('current_user');
    var currentCoins = parseInt(localStorage.getItem(currentUser + '.coins'));
    var packCost = 1000;
    if (currentCoins >= packCost) {
        // mtn-changes ----  subtract the pack cost from the user's coins
        var newCoins = currentCoins - packCost;
        localStorage.setItem(currentUser + '.coins', newCoins);
        // generate and display the pack
        openedPackContainer.classList.remove("hide");
        var pack_2 = generatePack(cards, "bronze");
        displayPack(pack_2);
        sendToAlbumBtn.addEventListener("click", function () {
            location.reload();
            var existingCardsString = localStorage.getItem(currentUser + ".cards");
            var existingCards = existingCardsString ? JSON.parse(existingCardsString) : [];
            var updatedCards = existingCards.concat(pack_2);
            localStorage.setItem(currentUser + ".cards", JSON.stringify(updatedCards));
            openedPackContainer.innerHTML = "";
            pack_2 = [];
            count = 0;
        });
    }
    else {
        handleNotEnoghCoins();
    }
});
silverPack.addEventListener("click", function () {
    var currentUser = localStorage.getItem('current_user');
    var currentCoins = parseInt(localStorage.getItem(currentUser + '.coins'));
    var packCost = 2500;
    if (currentCoins >= packCost) {
        // mtn-changes ---- subtract the pack cost from the user's coins
        var newCoins = currentCoins - packCost;
        localStorage.setItem(currentUser + '.coins', newCoins);
        // generate and display the pack
        openedPackContainer.classList.remove("hide");
        var pack_3 = generatePack(cards, "silver");
        displayPack(pack_3);
        sendToAlbumBtn.addEventListener("click", function () {
            location.reload();
            var existingCardsString = localStorage.getItem(currentUser + ".cards");
            var existingCards = existingCardsString ? JSON.parse(existingCardsString) : [];
            var updatedCards = existingCards.concat(pack_3);
            localStorage.setItem(currentUser + ".cards", JSON.stringify(updatedCards));
            openedPackContainer.innerHTML = "";
            pack_3 = [];
            count = 0;
        });
    }
    else {
        handleNotEnoghCoins();
    }
});
goldPack.addEventListener("click", function () {
    var currentUser = localStorage.getItem('current_user');
    var currentCoins = parseInt(localStorage.getItem(currentUser + '.coins'));
    var packCost = 5000;
    if (currentCoins >= packCost) {
        // mtn-changes ---- subtract the pack cost from the user's coins
        var newCoins = currentCoins - packCost;
        localStorage.setItem(currentUser + '.coins', newCoins);
        // generate and display the pack
        openedPackContainer.classList.remove("hide");
        var pack_4 = generatePack(cards, "gold");
        displayPack(pack_4);
        sendToAlbumBtn.addEventListener("click", function () {
            location.reload();
            var existingCardsString = localStorage.getItem(currentUser + ".cards");
            var existingCards = existingCardsString ? JSON.parse(existingCardsString) : [];
            var updatedCards = existingCards.concat(pack_4);
            localStorage.setItem(currentUser + ".cards", JSON.stringify(updatedCards));
            openedPackContainer.innerHTML = "";
            pack_4 = [];
            count = 0;
        });
    }
    else {
        handleNotEnoghCoins();
    }
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
    return pack;
}
function buyCoins(amount) {
    var currentUser = localStorage.getItem('current_user');
    var currentCoins = parseInt(localStorage.getItem(currentUser + ".coins")) || 0;
    var newCoins = currentCoins + amount;
    localStorage.setItem(currentUser + ".coins", newCoins);
    Swal.fire({
        title: 'Purchase Successful!',
        text: "You have successfully purchased " + amount + " coins!",
        icon: 'success',
        confirmButtonText: 'OK'
    });
}
TopUpBtn.addEventListener("click", function () {
    if (openedPackContainer.classList.contains("hide")) {
        packStoreContainer.classList.add("hide");
        albumContainer.classList.add("hide");
        pricingTable.classList.remove("hide");
    }
    else {
        alert("You need to send your cards to album first");
    }
});
goToAlbumBtn.addEventListener("click", function () {
    if (openedPackContainer.classList.contains("hide")) {
        albumContainer.classList.remove("hide");
        pricingTable.classList.add("hide");
        packStoreContainer.classList.add("hide");
    }
    else {
        alert("You need to send your cards to album first");
    }
});
goToStoreBtn.addEventListener("click", function () {
    if (openedPackContainer.classList.contains("hide")) {
        packStoreContainer.classList.remove("hide");
        albumContainer.classList.add("hide");
        pricingTable.classList.add("hide");
    }
    else {
        alert("You need to send your cards to album first");
    }
});
