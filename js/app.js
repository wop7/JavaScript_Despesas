class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  //budge forme

  submmitBudgetForm(){
    console.log("Chegou"); // aviso q esta funcionando
    const value = this.budgetInput.value; // pegando o valor passado no html
    if( value === '' || value < 0 ){ // verificar se n passou valor vazio o negt
      this.budgetFeedback.classList.add("showItem"); // adicionar o aviso
      this.budgetFeedback.innerHTML = `<p>O valor esta incorreto</p>` // aviso
      const self = this; // acessar no escopo settimeout
      setTimeout(function(){
        self.budgetFeedback.classList.remove("showItem");
      },4000) // some 4 seg
    }else{
      this.budgetAmount.textContent = value; // salvar a variavel
      this.budgetInput = ''; // apagar
      this.showBalance(); 
    }
  }

  //show balance
  showBalance(){
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;
    if(total < 0){
      this.balance.classList.remove('showGreen','showBlack');
      this.balance.classList.add('showRed');
    }
    else if(total > 0){
      this.balance.classList.remove('showGreen','showBlack');
      this.balance.classList.add('showGreen');
    }
    else if(total === 0){
      this.balance.classList.remove('showBlack','showGreen');
      this.balance.classList.add('showBlack');
    }
  }

  submmitExpenseForm(){
    const expenseValue = this.expenseInput.value;
  }

  totalExpense(){
    let total = 400;
    return total;
  }


}



  function eventListeners() {
    
    
    const budget = document.getElementById("budget-form");
    const expense = document.getElementById("expense-form");
    const expLista = document.getElementById("expense-list");

    //new instance of UI
    const ui =  new  UI();

    //budget form submit
    budget.addEventListener("submit",function(event){
      event.preventDefault(); // previnir de reexecutar
      ui.submmitBudgetForm();
    });

    //expense form submit
    expense.addEventListener("submit",function(event){
      event.preventDefault(); // previnir de reexecutar

    });

    //expenseList form submit
    budget.addEventListener("click",function(event){ 
      event.preventDefault();
      ui.submmitExpenseForm();   
    });

  
  } 
    
  document.addEventListener('DOMContentLoaded',function(){
    eventListeners(); 
  })



