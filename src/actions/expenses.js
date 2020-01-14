import database from '../firebase/firebase';

const addExpense = expense => ({
    type: 'ADD_EXPENSE',
    expense
});

// redux-thunk in action: this action generator does NOT
// return an action object, BUT a function
const startAddExpense = (expenseData = {}) => {

    // this is the function that is returned
    // it is called internally by redux with the dispatch to dispatch an action
    // this allows us to run async code so we can dispatch when all our processed end
    return dispatch => {

        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;

        const expense = {
            description,
            note,
            amount,
            createdAt
        };

        // save into database
        // when resolved, dispatch addExpense
        database
            .ref('expenses')
            .push(expense)
            .then(ref => dispatch(addExpense({
                id: ref.key,
                ...expense
            })))
            .catch(e => console.log(e));

    };

};

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = ({ id, updates } = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export { addExpense, startAddExpense, removeExpense, editExpense };