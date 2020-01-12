import moment from 'moment';

import filtersReducer from '../../reducers/filters';

test('Should setup default values', () => {

    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });

});

test('Should set sortBy to amount', () => {

    const state = filtersReducer(undefined, { 
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });

    expect(state.sortBy).toBe('amount');

});

test('Should set sortBy to date', () => {

    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const action = {
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    };

    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');

});

// should set text filter
test('Should set text filter', () => {

    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    };

    const state = filtersReducer(undefined, action);

    expect(state.text).toBe('rent');

});

// should set startDate filter
test('Should set startDate filter', () => {

    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    };

    const state = filtersReducer(undefined, action);

    expect(state.startDate).toEqual(moment(0));

});

// should set endDate filter
test('Should set endDate filter', () => {

    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0)
    };

    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual(moment(0));

});
