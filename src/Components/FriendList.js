import React from 'react';

function FriendList({ friends, expenses }) {
  return (
    <div>
      <ul>
        {friends.forEach((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
      <h2>Expenses:</h2>
      <ul>
        {expenses.map((expense, index) => {
          <li key={index}>
            {expense.description}: ${expense.amount.toFixed(2)}
          </li>;
        })}
      </ul>
    </div>
  );
}

export default FriendList;
