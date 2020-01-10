import React from 'react';

import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (

    <div>
    
        <p>
            Description: { description }
        </p>

        <p>
            Amount: { amount }
        </p>

        <p>
            Time of creation: { createdAt }
        </p>

        <button
            type="button"
            onClick={ () => dispatch(removeExpense({ id })) }
        >
            Remove
        </button>

    </div>

);

export default connect()(ExpenseListItem);