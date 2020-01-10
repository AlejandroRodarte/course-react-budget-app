import React from 'react';

import { connect } from 'react-redux';

import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const getSortByAction = option => {
    if (option === 'date') {
        return sortByDate;
    } else if (option === 'amount') {
        return sortByAmount;
    } else {
        return sortByDate;
    }
};

const ExpenseListFilters = ({ filters, dispatch }) => (

    <div>

        <input 
            type="text" 
            value={ filters.text }
            onChange={ e => dispatch(setTextFilter(e.target.value)) }
        />

        <select
            value={ filters.sortBy }
            onChange={ e => dispatch(getSortByAction(e.target.value)()) }
        >

            <option value="date">
                Date
            </option>
            
            <option value="amount">
                Amount
            </option>

        </select>

    </div>

);

const mapStateToProps = state => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);