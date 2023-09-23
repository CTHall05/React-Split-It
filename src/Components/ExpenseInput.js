import React, { useState } from 'react';

function ExpenseInput({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    if (description.trim() !== '' && parseFloat(amount) > 0) {
      onAddExpense({ description, amount: parseFloat(amount) });
      setDescription('');
      setAmount('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Expense description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Expense amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
}

export default ExpenseInput;
