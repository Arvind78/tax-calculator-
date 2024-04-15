const grossIncome = document.getElementById("gross-income");
const extraIncome = document.getElementById("extra-income");
const age = document.getElementById("age");
const deductions = document.getElementById("deductions");
const calculateBtn = document.getElementById("calculate-btn");
const model = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const errorIconIncome = document.getElementById("error-icon-income");
const errorIconExtraIncome = document.getElementById("error-icon-extra-income");
const errorIconAge = document.getElementById("error-icon-age");
const errorIconDeductions = document.getElementById("error-icon-deductions");

const resultContainer = document.getElementById("result-container");

calculateBtn.addEventListener("click", function(event) {
    event.preventDefault();

    // Check if input values are valid
    let valid = true;

    // Check Gross Annual Income
    if (!grossIncome.value || isNaN(parseFloat(grossIncome.value))) {
        alert("Gross Annual Income is required and must be a number.");
        valid = false;
    } 
    // Check Extra Income
   else if (!extraIncome.value || isNaN(parseFloat(extraIncome.value))) {
        alert('Extra Income is required and must be a number.');
        valid = false;
    } 

    // Check Age Group
   else if (!age.value) {
        alert ("Age Group is required.");
        valid = false;
    } 
    // Check Deductions
    else if (!deductions.value || isNaN(parseFloat(deductions.value))) {
         
      alert("Deductions is required and must be a number.");
        valid = false;
    } else{
        valid = true;

    }

    if (!valid) {
        return; // Exit the function if any input is invalid
    }

    // Get input values
    const grossIncomeValue = parseFloat(grossIncome.value);
    const extraIncomeValue = parseFloat(extraIncome.value);
    const ageValue = age.value;
    const deductionsValue = parseFloat(deductions.value);

    // Calculate total income after deductions
    const totalIncome = grossIncomeValue + extraIncomeValue - deductionsValue;

    // Calculate tax
    let tax = 0;
    if (totalIncome <= 800000) {
        // No tax for income less than or equal to 8 Lakhs
        tax = 0;
    } else {
        // Calculate taxable income
        const taxableIncome = totalIncome - 800000;
        
        // Apply tax rates based on age
        if (ageValue === "<40") {
            tax = 0.3 * taxableIncome;
        } else if (ageValue === ">=40 & <60") {
            tax = 0.4 * taxableIncome;
        } else if (ageValue === ">=60") {
            tax = 0.1 * taxableIncome;
        }
    }

    // Display the result
    resultContainer.textContent = "Tax to be paid: " + tax.toFixed(2) + " Lakhs";

    // Display the modal
    model.style.display = "flex";
});

closeModal.addEventListener("click", function() {
    // Close the modal
    model.style.display = "none";
    // Clear input fields and result when closing the modal
    grossIncome.value = "";
    extraIncome.value = "";
    age.value = "";
    deductions.value = "";
    resultContainer.textContent = "";
});

