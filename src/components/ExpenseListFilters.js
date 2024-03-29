import React from 'react';

import { connect } from 'react-redux';

import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

const getSortByAction = option => {
    if (option === 'date') {
        return sortByDate;
    } else if (option === 'amount') {
        return sortByAmount;
    } else {
        return sortByDate;
    }
};

export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onTextChange = e => this.props.setTextFilter(e.target.value);

    onSortChange = e => this.props.getSortByAction(e.target.value);

    render() {
        return (

            <div
                className="content-container"
            >

                <div
                    className="input-group"
                >
                
                    <div
                        className="input-group__item"
                    >
                    
                        <input 
                            type="text"
                            className="text-input"
                            placeholder="Search expenses"
                            value={ this.props.filters.text }
                            onChange={ this.onTextChange }
                        />

                    </div>

                    <div
                        className="input-group__item"
                    >
                    
                        <select
                            className="select"
                            value={ this.props.filters.sortBy }
                            onChange={ this.onSortChange }
                        >

                            <option 
                                value="date"
                            >
                                Date
                            </option>
                            
                            <option 
                                value="amount"
                            >
                                Amount
                            </option>

                        </select>

                    </div>

                    <div
                        className="input-group__item"
                    >
                    
                        <DateRangePicker
                            startDate={ this.props.filters.startDate }
                            startDateId="expense-start-date"
                            endDate={ this.props.filters.endDate }
                            endDateId="expense-end-date"
                            onDatesChange={ this.onDatesChange }
                            focusedInput={ this.state.calendarFocused }
                            onFocusChange={ this.onFocusChange }
                            showClearDates={ true }
                            numberOfMonths={ 1 }
                            isOutsideRange={ () => false }
                        />

                    </div>

                </div>
            
            </div>

        );
    }

}

const mapStateToProps = state => ({
    filters: state.filters
});

const mapDispatchToProps = dispatch => ({
    setTextFilter: text => dispatch(setTextFilter(text)),
    getSortByAction: option => dispatch(getSortByAction(option)()),
    setStartDate: startDate => dispatch(setStartDate(startDate)),
    setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);