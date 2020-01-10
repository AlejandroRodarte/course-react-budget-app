import { createStore, combineReducers } from 'redux';

const expensesReducerDefaultState = [];

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

// expenses reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {

        default:
            return state;

    }

};

// filters reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {

    switch (action.type) {

        default:
            return state;

    }

};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [
        {
            id: 'a',
            description: 'January Rent',
            note: 'This was the final payment for that address',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};
