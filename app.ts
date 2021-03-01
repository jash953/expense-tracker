const nameInput = document.getElementById('expense-name')! as HTMLInputElement;
const dateInput = document.getElementById('expense-date')! as HTMLInputElement;
const amountInput = document.getElementById('expense-amount')! as HTMLInputElement;
const addButton = document.getElementById('add-btn') as HTMLButtonElement;
const expenseTable = document.getElementById('expense-table') as HTMLTableElement;

const createNewExpense = () => {
  const newExpenseRow = expenseTable.insertRow(-1)! as HTMLTableRowElement;
  const newExpenseName = newExpenseRow.insertCell(0)! as HTMLTableDataCellElement;
  const newExpenseDate = newExpenseRow.insertCell(1)! as HTMLTableDataCellElement;
  const newExpenseAmount = newExpenseRow.insertCell(2)! as HTMLTableDataCellElement;

  newExpenseName.innerHTML = nameInput.value;
  newExpenseDate.innerHTML = dateInput.value;
  newExpenseAmount.innerHTML = amountInput.value;

  const removeFromTable = () => {
    newExpenseRow.removeChild(newExpenseName);
    newExpenseRow.removeChild(newExpenseDate);
    newExpenseRow.removeChild(newExpenseAmount);
  };

  newExpenseRow.addEventListener('click', removeFromTable);
  this.clearExpenseInputs();
};

this.clearExpenseInputs = () => {
  nameInput.value = '';
  dateInput.value = '';
  amountInput.value = '';
};

addButton.addEventListener('click', createNewExpense.bind(this));
