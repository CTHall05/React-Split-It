// Utility File: Functions

export function calculateBalances(friends, expenses) {
  const balances = {};

  // Initialize balances for each friend to 0
  friends.forEach((friend) => {
    balances[friend] = 0;
  });

  // Calculate Expenses
  expenses.forEach((expense) => {
    const amount = expense.amount;
    const splitAmount = amount / friends.length;

    friends.forEach((frined) => {
      balances[frined] += splitAmount;
    });
  });

  return balances;
}
