function generateRandomNumbers() {
    console.log("random func activated");
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
console.log(randomNumbers);
<<<<<<< Updated upstream
=======
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
console.log(rareRandomNumbers);
>>>>>>> Stashed changes
