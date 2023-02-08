function calculateTotal(amount, months, interestRate) {
    const interest = amount * interestRate * (months / 12);
    const total = amount + interest;
    return total;
  }
  
function simulateDeposit(amount, months, interestRate) {
    const results = [];
    for (let i = 0; i < months; i++) {
      results.push(calculateTotal(amount, i + 1, interestRate));
    }
    return results;
  }
const depositAmount = 1000;
const depositMonths = 24;
const depositInterestRate = 0.05;

const simulation = simulateDeposit(depositAmount, depositMonths, depositInterestRate);
console.log(simulation);