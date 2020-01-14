import expensesReducer from '../../reducers/expenses';

import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense by id that exists', () => {

    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state.length).toBe(2);

    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
    
});

test('Should not remove expense by id that does not exist', () => {

    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);

    expect(state.length).toBe(3);

    expect(state).toEqual(expenses);
    
});

// should add an expense
test('Should add an expense', () => {

    const expense = {
        id: '4',
        description: 'Coke',
        amount: 500,
        note: '',
        createdAt: 1000
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);

    expect(state.length).toBe(4);

    expect(state).toEqual([...expenses, expense]);

    expect(state[3]).toEqual(expense);

});

// should edit an expense by known id
test('Should edit an expense by known id', () => {

    const updates = {
        amount: 330
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    };

    const state = expensesReducer(expenses, action);

    expect(state[0].amount).toBe(updates.amount);

});

// should not edit an expense by unknown id
test('Should not edit an expense by unknown id', () => {

    const updates = {
        note: 'A soda I wanted'
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);

});

test('Should set expenses', () => {

    const action = {
        type: 'SET_EXPENSES',
        expenses
    };

    const state = expensesReducer(undefined, action);

    expect(state).toEqual(expenses);

});
