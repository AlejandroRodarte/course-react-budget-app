import React from 'react';

import moment from 'moment';

import { shallow } from 'enzyme';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';

import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, getSortByAction, setStartDate, setEndDate, wrapper;

beforeEach(() => {

    setTextFilter = jest.fn();

    getSortByAction = jest.fn();

    setStartDate = jest.fn();

    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters
            setTextFilter={ setTextFilter }
            getSortByAction={ getSortByAction }
            setStartDate={ setStartDate }
            setEndDate={ setEndDate }
            filters={ filters }
        />
    );

});

test('Should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alternate filters', () => {

    wrapper.setProps({
        filters: altFilters
    });

    expect(wrapper).toMatchSnapshot();

});

test('Should handle text change', () => {

    const value = 'rent';

    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(value);

});

test('Should sort by date', () => {

    const value = 'date';

    wrapper.setProps({
        filters: altFilters
    });

    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    });

    expect(getSortByAction).toHaveBeenLastCalledWith(value);

});

test('Should sort by amount', () => {

    const value = 'amount';

    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    });

    expect(getSortByAction).toHaveBeenLastCalledWith(value);

});

test('Should handle date changes', () => {

    const dates = {
        startDate: moment(0).subtract(3, 'days'),
        endDate: moment(0).add(4, 'days')
    };

    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(dates);

    expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate);

});

test('Should handle date focus change', () => {

    const calendarFocused = 'startDate';

    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);

    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);

});
