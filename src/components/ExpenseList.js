import React from 'react';

import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';

import getVisibleExpenses from '../selectors/expenses';

export const ExpenseList = props => (

    <div
        className="content-container"
    >

        <div
            className="list-header"
        >

            <div
                class="show-for-mobile"
            >
                Expenses
            </div>
        
            <div
                class="show-for-desktop"
            >
                Expense
            </div>
        
            <div
                class="show-for-desktop"
            >
                Amount
            </div>

        </div>

        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ): (
                props.expenses.map(expense => (
                    <ExpenseListItem key={ expense.id } { ...expense } />
                ))
            )
        }

    </div>

);

const mapStateToProps = state => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
