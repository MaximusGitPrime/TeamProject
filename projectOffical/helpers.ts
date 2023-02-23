
function generateRandomNumbers() {
    const numbers:any = [];
    while (numbers.length < 5) {
      const random = Math.floor(Math.random() * (30-0)) + 0;
      if (!numbers.includes(random)) {
        numbers.push(random);
      }
    }
    return numbers;
  }
  const randomNumbers = generateRandomNumbers();
