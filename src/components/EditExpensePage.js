import React from 'react';

import { connect } from 'react-redux';

import { startEditExpense, startRemoveExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {

    onSubmit = expense => {
        this.props.startEditExpense(this.props.match.params.id, expense);
        this.props.history.push('/');
    };

    onClick = () => {
        this.props.startRemoveExpense(this.props.match.params.id)
        this.props.history.push('/');
    };

    render() {
        return (
            <div>

                <ExpenseForm
                    onSubmit={ this.onSubmit }
                    expense={ this.props.expense }
                />

                <button
                    onClick={ this.onClick }
                >
                    Remove
                </button>

            </div>
        );
    }

}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
    startEditExpense: (id, updates) => dispatch(startEditExpense({ id, updates })),
    startRemoveExpense: id => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);