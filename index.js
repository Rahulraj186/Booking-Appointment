function test(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    
    //storing data in local storage
    var user = localStorage.setItem("name",name);
    var em = localStorage.setItem("email",email);
    var mb = localStorage.setItem("mobile",mobile);
    
    //retrieving the data
    var user = localStorage.getItem("n",n);
    var em = localStorage.getItem("email",email);
    var mb = localStorage.getItemet("mobile",mobile);
}
function displayExpenses() {
    const expenseList = document.getElementById('appList');
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    
    expenseList.innerHTML = '';

    if (expenses.length > 0) {
      expenses.forEach((expense, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'card mb-2';
        listItem.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${expense.description}</h5>
            <p class="card-text">Amount: $${expense.amount} | Category: ${expense.category}</p>
            <button type="button" class="btn btn-danger" onclick="deleteExpense(${index})">Delete</button>
            <button type="button" class="btn btn-warning ml-2" onclick="editExpense(${index})">Edit</button>
          </div>`;
        expenseList.appendChild(listItem);
      });
    } else {
      expenseList.innerHTML = '<p>No expenses yet.</p>';
    }
  }
  function deleteExpense(index) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
  }

  // Function to delete all expenses
  function deleteExpenses() {
    localStorage.removeItem('expenses');
    displayExpenses();
  }
