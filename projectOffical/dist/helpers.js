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
