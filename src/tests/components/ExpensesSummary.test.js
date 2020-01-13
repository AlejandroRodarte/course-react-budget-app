import React from 'react';

import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render ExpensesSummary with a single expense', () => {
    
    const wrapper = shallow(
        <ExpensesSummary
            expenseCount={ 2 }
            expensesTotal={ 9434 }
        />
    );

    expect(wrapper).toMatchSnapshot();

});

test('Should render ExpensesSummary with a multiple expenses', () => {

    const wrapper = shallow(
        <ExpensesSummary
            expenseCount={ 1 }
            expensesTotal={ 9434 }
        />
    );

    expect(wrapper).toMatchSnapshot();

});
