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


var input = document.querySelectorAll('.inputs');

calculate.addEventListener('click', function() {
    
    for(val of input) {

        const value = val.value;
        const getInputIcome =   parseFloat(inputIncome.value);
        const getInputIFood =   parseFloat(inputFood.value);
        const getInputRent =   parseFloat(inputRent.value);
        const getInputClothes =   parseFloat(inputClothes.value);
        const expenses = (getInputIFood + getInputRent + getInputClothes  );
        if(value !== '' && value > 0 && !isNaN(value) && getInputIcome > expenses) {
            totalExpenses.innerText = expenses;
            balance.innerText = (getInputIcome - expenses);
        } else if(getInputIcome < expenses){
            calculateError.style.display = 'block';
        } else {
            inputIncomeError.style.display = 'block';
        }
    }
})

save.addEventListener('click', function() {
    console.log('hello');
    const savedMoney = parseFloat(inputSave.value);
    const despositedMoney = parseFloat(inputIncome.value);
    const balanceMoney = parseFloat(balance.innerText);
    const percentageMoney = (despositedMoney / 100)*savedMoney
    if(percentageMoney < balanceMoney) {
        savingAmount.innerText = percentageMoney;
        remainingBalance.innerText = balanceMoney - percentageMoney;
    } else {
        savingsError.style.display= 'block';
    }

})  

