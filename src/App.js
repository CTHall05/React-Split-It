import React, { useState } from 'react';
import AddFriend from './Components/AddingFriends';
import FriendList from './Components/FriendList';
import ExpenseInput from './Components/ExpenseInput';
import { calculateBalances } from './utils';
import './App.css';

function App() {
  const [friends, setFriends] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const handleAddFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleClearExpenses = (expense) => {
    setExpenses([]);
  };

  const balances = calculateBalances(friends, expenses); // Calculate the Balance

  return (
    <section>
      <h1>Split It!</h1>
      <AddFriend onAddFriend={handleAddFriend}></AddFriend>
      <FriendList friends={friends} expenses={expenses}></FriendList>
      <ExpenseInput onAddExpense={handleAddExpense}></ExpenseInput>
      {/* Display Balances */}
      <div>
        <h2>Friend Balances:</h2>
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>
              {friend}: ${balances[friend].toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleClearExpenses}>Clear</button>
    </section>
  );
}

export default App;
