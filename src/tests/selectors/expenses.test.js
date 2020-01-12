import moment from 'moment';

import getVisibleExpenses from '../../selectors/expenses';

import expenses from '../fixtures/expenses';

test('Should filter by text value', () => {

    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);

    // remember, they are sorted by date, so the final order of the element changes
    expect(result).toEqual([
        expenses[2],
        expenses[1]
    ]);

    expect(result.length).toBe(2);

});

test('Should filter by start date', () => {

    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2],
        expenses[0]
    ]);

    expect(result.length).toBe(2);

});

// should filter by end date
test('Should filter by end date', () => {

    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[0],
        expenses[1]
    ]);

    expect(result.length).toBe(2);

});

// should sort by date
test('Should sort by date', () => {

    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2],
        expenses[0],
        expenses[1]
    ]);

});

// should sort by amount
test('Should sort by amount', () => {

    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[1],
        expenses[2],
        expenses[0]
    ]);

});
