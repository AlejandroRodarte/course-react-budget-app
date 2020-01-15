import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import numeral from 'numeral';

import getVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (

    <div
        className="page-header"
    >

        <div
            className="content-container"
        >

            <h1
                className="page-header__title"
            >

                Viewing &nbsp;

                <span>
                    { expenseCount }
                </span>

                &nbsp; expense{ expenseCount !== 1 && 's' } totalling &nbsp;
                
                <span>
                    { numeral(expensesTotal / 100).format('$0,0.00') }
                </span>

            </h1>

            <div
                className="page-header__actions"
            >
            
                <Link
                    className="button"
                    to="/create"
                >
                    Add Expense
                </Link>

            </div>

        </div>

    </div>

);

const mapStateToProps = state => {

    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };

};

export default connect(mapStateToProps)(ExpensesSummary);
