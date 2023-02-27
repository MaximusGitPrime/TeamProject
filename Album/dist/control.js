function generateRandomNumbers() {
    try {
        var numbers = [];
        while (numbers.length < 5) {
            var random = Math.floor(Math.random() * (30 - 0)) + 0;
            if (!numbers.includes(random)) {
                numbers.push(random);
            }
        }
        return numbers;
    }
    catch (error) {
        console.error(error);
    }
}
var randomNumbers = generateRandomNumbers();
function generateRandomNumbersRare() {
    try {
        var numbers = [];
        while (numbers.length < 5) {
            var random = Math.floor(Math.random() * (24 - 0) + 0);
            if (!numbers.includes(random)) {
                numbers.push(random);
            }
        }
        return numbers;
    }
    catch (error) {
        console.error(error);
    }
}
var rareRandomNumbers = generateRandomNumbersRare();
// function getRandomCard(reraty: Reraty, cards: Card[], numberOfCards: number) {
//     try {
//         debugger;
//         const fillteredCards: Card[] = cards.filter(
//             (card) => card.rarity === reraty
//         );
//         const selectedCards: Card[] = [];
//         while (numberOfCards >= 0 && fillteredCards.length >= 0) {
//             //get random card, and remove from fillteredCards
//             const index = Math.floor(Math.random() * fillteredCards.length);
//             selectedCards.push(fillteredCards[index]);
//             fillteredCards.splice(index, 1);
//             numberOfCards--;
//         }
//         return selectedCards;
//     } catch (error) {
//         console.error(error);
//         return undefined;
//     }
// }
