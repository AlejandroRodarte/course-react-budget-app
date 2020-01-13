import React from 'react';

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
