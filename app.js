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

// btns
const calculate = document.getElementById('calculate');
const save = document.getElementById('save');

//error message
const errorMessage = 'Can not be negative numbers or blank field or letters';

// error message function
const showError = function (id, text) {
    const inputError = document.getElementById(id);
    inputError.innerText = text;
    inputError.style.display = 'block';
}

// succes message function
const showSuccess = function (id) {
    const inputError = document.getElementById(id);
    inputError.innerText = '';
    inputError.style.display = 'none';
}

// input field validation function
const inputValidator = function () {
      // income
      if(inputIncome.value == '' || inputIncome.value < 0 || isNaN(inputIncome.value)) {
        showError('inputIncomeError',errorMessage )
    }else {
        showSuccess('inputIncomeError');
    } 
    // food
      if(inputFood.value == '' || inputFood.value < 0 || isNaN(inputFood.value)) {
        showError('inputFoodError',errorMessage )
    }else {
        showSuccess('inputFoodError');
    }
    // rent
      if(inputRent.value == '' || inputRent.value < 0 || isNaN(inputRent.value)) {
        showError('inputRentError',errorMessage )
        
    }else {
        showSuccess('inputRentError');
    }
    // clothes
      if(inputClothes.value == '' || inputClothes.value < 0 || isNaN(inputClothes.value)) {
        showError('inputClothesError',errorMessage )
    }else {
        showSuccess('inputClothesError');
    }
}

// empty field function
const emptyInputFields = function (id) {
    const emptyInput = document.getElementById(id)
    emptyInput.value = '';
}

const subtract = function (income,expenses) {
    const profit = income-expenses;
    return profit;
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
            balance.innerText =  subtract(getInputIcome, expenses);
            calculateError.style.display = 'none';

            // empty field function
            emptyInputFields('inputFood');
            emptyInputFields('inputRent');
            emptyInputFields('inputClothes');
               
        } else if(getInputIcome < expenses){
            calculateError.style.display = 'block';
        } 
})



// saving calculation
save.addEventListener('click', function() {
    const savedMoney = parseFloat(inputSave.value);
    const despositedMoney = parseFloat(inputIncome.value);
    const balanceMoney = parseFloat(balance.innerText);
    const percentageMoney = (despositedMoney / 100)*savedMoney
    if(balanceMoney > percentageMoney ) {
        savingAmount.innerText = percentageMoney;
        remainingBalance.innerText = subtract(balanceMoney , percentageMoney);
        showSuccess('savingsError');
        emptyInputFields('inputIncome');
        emptyInputFields('inputSave');
    } else {
        showError('savingsError','Empty field or savings is too much than your expense');
    } 

})  

