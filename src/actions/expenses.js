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
    return (dispatch, getState) => {

        const uid = getState().auth.uid;

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
        return database
                .ref(`users/${uid}/expenses`)
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

const startRemoveExpense = id => {

    return (dispatch, getState) => {

        const uid = getState().auth.uid;

        return database
                .ref(`users/${uid}/expenses/${id}`)
                .remove()
                .then(() => dispatch(removeExpense({ id })))
                .catch(e => console.log(e));

    };

};

const editExpense = ({ id, updates } = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const startEditExpense = ({ id, updates } = {}) => {

    return (dispatch, getState) => {

        const uid = getState().auth.uid;

        return database
                .ref(`users/${uid}/expenses/${id}`)
                .update(updates)
                .then(() => dispatch(editExpense({ id, updates })))
                .catch(e => console.log(e));

    };

};

const setExpenses = expenses => ({
    type: 'SET_EXPENSES',
    expenses
});

const startSetExpenses = () => {

    return (dispatch, getState) => {

        const uid = getState().auth.uid;

        return database
                .ref(`users/${uid}/expenses`)
                .once('value')
                .then(snapshot => {

                    const expenses = [];

                    snapshot.forEach(childSnapshot => {
                        expenses.push({
                            id: childSnapshot.key,
                            ...childSnapshot.val()
                        });
                    });

                    dispatch(setExpenses(expenses));

                })
                .catch(e => console.log(e));

    };

};

export { 
    addExpense, 
    startAddExpense, 
    removeExpense, 
    startRemoveExpense,
    editExpense,
    startEditExpense,
    setExpenses,
    startSetExpenses
};