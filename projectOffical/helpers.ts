
function generateRandomNumbers() {
    console.log("random func activated");
    
    let numbers:any = [];
    while (numbers.length < 5) {
      const random = Math.floor(Math.random() * (30-0)) + 0;
      if (!numbers.includes(random)) {
        numbers.push(random);
      }
    }
    return numbers;
  }
<<<<<<< Updated upstream
  let randomNumbers = generateRandomNumbers();
  console.log(randomNumbers);
  
=======
  const randomNumbers = generateRandomNumbers();
console.log(randomNumbers);


function generateRandomNumbersRare() {
    const numbers:any = [];
    while (numbers.length < 5) {
      const random = Math.floor(Math.random() * (24-0)+0);
      if (!numbers.includes(random)) {
        numbers.push(random);
      }
    }
    return numbers;
  }
  const rareRandomNumbers = generateRandomNumbersRare();
console.log(rareRandomNumbers);
>>>>>>> Stashed changes
