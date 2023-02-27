function generateRandomNumbers() {
    var numbers = [];
    while (numbers.length < 5) {
        var random = Math.floor(Math.random() * (30 - 0)) + 0;
        if (!numbers.includes(random)) {
            numbers.push(random);
        }
    }
    return numbers;
}
var randomNumbers = generateRandomNumbers();
function generateRandomNumbersRare() {
    var numbers = [];
    while (numbers.length < 5) {
        var random = Math.floor(Math.random() * (24 - 0) + 0);
        if (!numbers.includes(random)) {
            numbers.push(random);
        }
    }
    return numbers;
}
var rareRandomNumbers = generateRandomNumbersRare();
function getRandomCard(reraty, cards, numberOfCards) {
    try {
        debugger;
        var fillteredCards = cards.filter(function (card) { return card.rarity === reraty; });
        var selectedCards = [];
        while (numberOfCards >= 0 && fillteredCards.length >= 0) {
            //get random card, and remove from fillteredCards
            var index = Math.floor(Math.random() * fillteredCards.length);
            selectedCards.push(fillteredCards[index]);
            fillteredCards.splice(index, 1);
            numberOfCards--;
        }
        return selectedCards;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
