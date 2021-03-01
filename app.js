var _this = this;
var nameInput = document.getElementById('expense-name');
var dateInput = document.getElementById('expense-date');
var amountInput = document.getElementById('expense-amount');
var addButton = document.getElementById('add-btn');
var expenseTable = document.getElementById('expense-table');
var createNewExpense = function () {
    var newExpenseRow = expenseTable.insertRow(-1);
    var newExpenseName = newExpenseRow.insertCell(0);
    var newExpenseDate = newExpenseRow.insertCell(1);
    var newExpenseAmount = newExpenseRow.insertCell(2);
    newExpenseName.innerHTML = nameInput.value;
    ;
    newExpenseDate.innerHTML = dateInput.value;
    newExpenseAmount.innerHTML = amountInput.value;
    var removeFromTable = function () {
        newExpenseRow.removeChild(newExpenseName);
        newExpenseRow.removeChild(newExpenseDate);
        newExpenseRow.removeChild(newExpenseAmount);
    };
    newExpenseRow.addEventListener('click', removeFromTable);
    _this.clearExpenseInputs();
};
this.clearExpenseInputs = function () {
    nameInput.value = '';
    dateInput.value = '';
    amountInput.value = '';
};
addButton.addEventListener('click', createNewExpense.bind(this));
