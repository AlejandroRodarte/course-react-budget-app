import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import database from '../../firebase/firebase';

import { addExpense, startAddExpense, editExpense, removeExpense } from '../../actions/expenses';

import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('Should setup remove expense action object', () => {

    const action = removeExpense({ id: 'abc123' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123' 
    });

});

test('Should setup edit expense action object', () => {

    const action = editExpense({
        id: 'abc123',
        updates: {
            note: 'New note value'
        }
    });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'New note value'
        }
    });

});

test('Should setup add expense action object with provided values', () => {

    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });

});

test('Should add expense to database and store', (done) => {

    const store = createMockStore({});

    const expenseData = {
        description: 'Mouse',
        note: 'Cool mouse',
        amount: 3000,
        createdAt: 12000000
    };

    store
        .dispatch(startAddExpense(expenseData))
        .then(() => {

            const actions = store.getActions();

            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });

            return database
                    .ref(`expenses/${actions[0].expense.id}`)
                    .once('value');

        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        })
        .catch(e => console.log(e));

});

test('Should add expense with defaults to database and store', (done) => {

    const store = createMockStore({});

    const expenseDefaults = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0 
    };

    store
        .dispatch(startAddExpense({}))
        .then(() => {

            const actions = store.getActions();

            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseDefaults
                }
            });

            return database
                    .ref(`expenses/${actions[0].expense.id}`)
                    .once('value');

        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
        });

});
