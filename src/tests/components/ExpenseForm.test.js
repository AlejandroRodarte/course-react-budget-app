import React from 'react';

import { shallow } from 'enzyme';

import moment from 'moment';

import ExpenseForm from '../../components/ExpenseForm';

import expenses from '../fixtures/expenses';

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with expense data', () => {

    const wrapper = shallow(
        <ExpenseForm
            expense={ expenses[0] }
        />
    );

    expect(wrapper).toMatchSnapshot();

});

test('Should render error for invalid form submission', () => {

    const wrapper = shallow(<ExpenseForm />);

    // first snapshot: before the error
    expect(wrapper).toMatchSnapshot();

    // defining preventDefault, required since the onSubmit handler calls it
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);

    // second snapshot: after the error
    expect(wrapper).toMatchSnapshot();

});

test('Should set description on input change', () => {

    const value = 'New description';

    const wrapper = shallow(<ExpenseForm />);

    // at(0) to get the first input (description): 0 is the index
    // define target.value since the onChange function requires it to get the value
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('description')).toBe(value);

});

test('Should set note on textarea change', () => {

    const value = 'New note';

    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('textarea').simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('note')).toBe(value);

});

test('Should set amount if valid input', () => {

    const value = '22.50';

    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('amount')).toBe(value);

});

test('Should not set amount if invalid input', () => {

    const value = '12.122';

    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('amount')).toBe('');

});

test('Should call onSubmit prop for valid form submission', () => {

    const onSubmitSpy = jest.fn();

    const wrapper = shallow(
        <ExpenseForm
            expense={ expenses[0] }
            onSubmit={ onSubmitSpy }
        />
    );

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error')).toBe('');

    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: expenses[0].note
    });

});

test('Should set new date on date change', () => {

    const now = moment();

    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);

    expect(wrapper.state('createdAt')).toEqual(now);

});

test('Should set calendar focus on change', () => {

    const focused = true;

    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });

    expect(wrapper.state('calendarFocused')).toBe(focused);

});

test('Spy mock test', () => {

    // our spy function of onSubmit; used to replace this.props.onSubmit
    const onSubmitSpy = jest.fn();

    // spy function called with some args
    onSubmitSpy('Andrew', 'Philadelphia');

    // was spy called with these args? test passes!
    expect(onSubmitSpy).toHaveBeenCalledWith('Andrew', 'Philadelphia');

});
