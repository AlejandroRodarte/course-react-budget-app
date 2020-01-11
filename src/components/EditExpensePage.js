import React from 'react';

import { connect } from 'react-redux';

import { editExpense, removeExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

const EditExpensePage = ({ dispatch, expense, history, match }) => (

    <div>

        <ExpenseForm
            onSubmit={ expense => {

                dispatch(editExpense({
                    id: match.params.id,
                    updates: expense
                }));

                history.push('/');

            } }
            expense={ expense }
        />

        <button
            onClick={ () => {
                dispatch(removeExpense({ id: match.params.id }));
                history.push('/');
            } }
        >
            Remove
        </button>

    </div>

);

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);