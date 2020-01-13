import React from 'react';

import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage';

import expenses from '../fixtures/expenses';

let wrapper, editExpense, removeExpense, history, match, expense;

beforeEach(() => {

    editExpense = jest.fn();

    removeExpense = jest.fn();

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
            editExpense={ editExpense }
            removeExpense={ removeExpense }
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

    expect(editExpense).toHaveBeenLastCalledWith(match.params.id, updatedExpense);
    expect(history.push).toHaveBeenLastCalledWith('/');

});

test('Should handle removeExpense', () => {

    wrapper.find('button').simulate('click');

    expect(removeExpense).toHaveBeenLastCalledWith(match.params.id);
    expect(history.push).toHaveBeenLastCalledWith('/');

});
