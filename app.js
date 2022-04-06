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


// btns
const calculate = document.getElementById('calculate');
const save = document.getElementById('save');

calculate.addEventListener('click', function (event) {
    event.preventDefault();
    
    if(isNaN(inputIncome.value)) {
        inputIncomeError.style.display = 'block'
        if(isNaN(inputFood.value)) {
            inputFoodError.style.display = 'block' 
            if(isNaN(inputRent.value)) {
                inputRentError.style.display = 'block' 
                if(isNaN(inputClothes.value)) {
                    inputClothesError.style.display = 'block' 
                }
            }
        } 
    } 
    
   else {
       const getInputIcome =   parseFloat(inputIncome.value);
       const getInputIFood =   parseFloat(inputFood.value);
       const getInputRent =   parseFloat(inputRent.value);
       const getInputClothes =   parseFloat(inputClothes.value);

       const expenses = (getInputIFood + getInputRent + getInputClothes  );

       totalExpenses.innerText = expenses;
       balance.innerText = (getInputIcome - expenses);
       
    }
})

/*
have to handle error 
1.any filed must contain number. if text have to show error
2.any filed can not contain negative number. if text have to show error

// bonus error

1. if expense > income show error
2.if saving amount is > balance. show error
*/