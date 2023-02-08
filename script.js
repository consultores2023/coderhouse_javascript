// ESTE METODO CALCULA EL MONTO TOTAL
function calculateTotal(amount, months, interestRate) {
    const interest = amount * interestRate * (months / 12);
    const total = amount + interest;
    return total;
  }

// ESTE METODO PERMITE GUARDAR EN UN ARRAY EL RESULTADO DEL MONTO TOTAL FINAL DEL DEPOSITO A PLAZO
function simulateDeposit(amount, months, interestRate) {
    const results = [];
    for (let i = 0; i < months; i++) {
      results.push(calculateTotal(amount, i + 1, interestRate));
    }
    return results;
}
  
// ESTAS CONSTANTES SIRVEN PARA PROBAR UN CASO
const depositAmount = 1000;
const depositMonths = 24;
const depositInterestRate = 0.05;

// APLICAMOS UN CASO
const simulation = simulateDeposit(depositAmount, depositMonths, depositInterestRate);

// LO MOSTRAMOS EN PANTALLA
console.log(simulation);