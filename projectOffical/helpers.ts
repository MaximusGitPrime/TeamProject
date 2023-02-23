
function generateRandomNumbers() {
    console.log("random func activated");
    
    const numbers:any = [];
    while (numbers.length < 5) {
      const random = Math.floor(Math.random() * (30-0)) + 0;
      if (!numbers.includes(random)) {
        numbers.push(random);
      }
    }
    return numbers;
  }
  let randomNumbers = generateRandomNumbers();
  console.log(randomNumbers);
  
