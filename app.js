// input fields
const inputIncome = document.getElementById('inputIncome')
const inputFood = document.getElementById('inputFood')
const inputRent = document.getElementById('inputRent')
const inputClothes = document.getElementById('inputClothes')
const inputSave = document.getElementById('inputSave');
// text fields
const totalExpenses = document.getElementById('totalExpenses');
const balance = document.getElementById('balance');
const savingAmount = document.getElementById('savingAmount');
const remainingBalance = document.getElementById('remainingBalance');

// error 
const inputIncomeError = document.getElementById('inputIncomeError');
const inputFoodError = document.getElementById('inputFoodError');
const inputClothesError = document.getElementById('inputClothesError');
const inputRentError = document.getElementById('inputRentError');
const inputSaveError = document.getElementById('inputSaveError');
const calculateError = document.getElementById('calculateError');
const savingsError = document.getElementById('savingsError');


// btns
const calculate = document.getElementById('calculate');
const save = document.getElementById('save');

// input field validation function
const inputValidator = function () {
      // income
      if(inputIncome.value == '' || inputIncome.value < 0 || isNaN(inputIncome.value)) {
        inputIncomeError.style.display = 'block';
    }else {
        inputIncomeError.style.display = 'none';
    }
    // Food
    if(inputFood.value == '' || inputFood.value < 0 || isNaN(inputFood.value)) {
        inputFoodError.style.display = 'block';
    }else {
        inputFoodError.style.display = 'none';
    }
    // rent
    if(inputRent.value == '' || inputRent.value < 0 || isNaN(inputRent.value)) {
        inputRentError.style.display = 'block';
    }else {
        inputRentError.style.display = 'none';
    }
    // food
    if(inputClothes.value == '' || inputClothes.value < 0 || isNaN(inputClothes.value)) {
        inputClothesError.style.display = 'block';
    }else {
        inputClothesError.style.display = 'none';
    }
}

//  caculator function
calculate.addEventListener('click', function() {
    // input field validation function
    inputValidator()
  
    // calculation

        const getInputIcome =   parseFloat(inputIncome.value);
        const getInputFood =   parseFloat(inputFood.value);
        const getInputRent =   parseFloat(inputRent.value);
        const getInputClothes =   parseFloat(inputClothes.value);
        const expenses = (getInputFood + getInputRent + getInputClothes  );
        if(getInputIcome > expenses) {
            totalExpenses.innerText = expenses;
            balance.innerText = (getInputIcome - expenses);
            calculateError.style.display = 'none';
        } else if(getInputIcome > expenses){
            calculateError.style.display = 'block';
        } 
})


// saving calculation
save.addEventListener('click', function() {
    console.log('hello');
    const savedMoney = parseFloat(inputSave.value);
    const despositedMoney = parseFloat(inputIncome.value);
    const balanceMoney = parseFloat(balance.innerText);
    const percentageMoney = (despositedMoney / 100)*savedMoney
    if(percentageMoney < balanceMoney) {
        savingAmount.innerText = percentageMoney;
        remainingBalance.innerText = balanceMoney - percentageMoney;
        savingsError.style.display= 'none';
    } else {
        savingsError.style.display= 'block';
    }

})  

