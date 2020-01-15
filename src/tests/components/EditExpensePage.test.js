import React from 'react';

import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage';

import expenses from '../fixtures/expenses';

let wrapper, startEditExpense, startRemoveExpense, history, match, expense;

beforeEach(() => {

    startEditExpense = jest.fn();

    startRemoveExpense = jest.fn();

    history = {
        push: jest.fn()
    };

    match = {
        params: {
            id: expenses[0].id
        }
    };

    expense = expenses[0];

    wrapper = shallow(
        <EditExpensePage
            startEditExpense={ startEditExpense }
            startRemoveExpense={ startRemoveExpense }
            history={ history }
            match={ match }
            expense={ expense }
        />
    );

});

test('Should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle editExpense', () => {

    const updatedExpense = {
        description: expense.description,
        amount: 30000,
        createdAt: expense.createdAt,
        note: 'New note'
    };

    wrapper.find('ExpenseForm').prop('onSubmit')(updatedExpense);

    expect(startEditExpense).toHaveBeenLastCalledWith(match.params.id, updatedExpense);
    expect(history.push).toHaveBeenLastCalledWith('/');

});

test('Should handle startRemoveExpense', () => {

    wrapper.find('button').simulate('click');

    expect(startRemoveExpense).toHaveBeenLastCalledWith(match.params.id);
    expect(history.push).toHaveBeenLastCalledWith('/');

});
