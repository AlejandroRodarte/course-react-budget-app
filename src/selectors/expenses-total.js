const reducer = (acc, curValue) => acc + curValue;

const selectExpensesTotal = expenses => {
    return expenses.map(expense => expense.amount).reduce(reducer, 0);
};

export default selectExpensesTotal;