import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import database from '../../firebase/firebase';

import { 
    addExpense, 
    startAddExpense, 
    editExpense,
    startEditExpense, 
    removeExpense, 
    startRemoveExpense,
    setExpenses, 
    startSetExpenses 
} from '../../actions/expenses';

import expenses from '../fixtures/expenses';

const uid = 'test-uid';
const defaultAuthState = { auth: { uid } };

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {

    const expenseData = {};

    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id] = { description, note, amount, createdAt };
    });

    database
        .ref(`users/${uid}/expenses`)
        .set(expenseData)
        .then(() => done());

});

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

    const store = createMockStore(defaultAuthState);

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
                    .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
                    .once('value');

        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        })
        .catch(e => console.log(e));

});

test('Should add expense with defaults to database and store', (done) => {

    const store = createMockStore(defaultAuthState);

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
                    .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
                    .once('value');

        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
        });

});

test('Should setup set expense action object with data', () => {

    const action = setExpenses(expenses);

    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });

});

test('Should fetch the expenses from firebase', (done) => {

    const store = createMockStore(defaultAuthState);

    store
        .dispatch(startSetExpenses())
        .then(() => {

            const actions = store.getActions();

            expect(actions[0]).toEqual({
                type: 'SET_EXPENSES',
                expenses
            });

            done();

        })
        .catch(e => console.log(e));

});

test('Should remove expense from firebase', (done) => {

    const store = createMockStore(defaultAuthState);

    const id = expenses[0].id;

    store
        .dispatch(startRemoveExpense(id))
        .then(() => {

            const actions = store.getActions();

            expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id
            });

            return database
                    .ref(`users/${uid}/expenses/${id}`)
                    .once('value');

        })
        .then(snapshot => {
            expect(snapshot.val()).toBeNull();
            done();
        })
        .catch(e => console.log(e));

});

test('Should edit an expense on the database', (done) => {

    const store = createMockStore(defaultAuthState);

    const id = expenses[1].id;
    
    const updates = {
        description: expenses[1].description,
        note: 'New note',
        amount: 25000,
        createdAt: expenses[1].createdAt
    };

    store
        .dispatch(startEditExpense({ id, updates }))
        .then(() => {

            const actions = store.getActions();

            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id,
                updates
            });

            return database
                    .ref(`users/${uid}/expenses/${id}`)
                    .once('value');

        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual(updates);
            done();
        })
        .catch(e => console.log(e));

});
