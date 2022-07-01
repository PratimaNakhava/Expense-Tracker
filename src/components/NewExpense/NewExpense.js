import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [addNewButtonClicked, setAddNewButtonClicked] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };
    props.onAddExpense(expenseData);
    setAddNewButtonClicked(false);
  };

  const addNewHandler = () => {
    setAddNewButtonClicked(true);
  };

  const removeNewHandler = () => {
    setAddNewButtonClicked(false);
  };

  return (
    <div className="new-expense">
      {!addNewButtonClicked ? (
        <button onClick={addNewHandler}>Add New Expense</button>
      ) : (
        addNewButtonClicked && (
          <ExpenseForm
            saveExpenseDataHandler={saveExpenseDataHandler}
            onCancel={removeNewHandler}
          />
        )
      )}
    </div>
  );
}
export default NewExpense;
