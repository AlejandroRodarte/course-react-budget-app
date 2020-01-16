import React from 'react';

import moment from 'moment';

import numeral from 'numeral';

import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (

    <Link
        class="list-item"
        to={ `/edit/${id}` }
    >

        <div>
        
            <h3>
                { description }
            </h3>
        
            <span>
                { moment(createdAt).format('MMMM Do, YYYY') }
            </span>

        </div>

        <h3>
            { numeral(amount / 100).format('$0,0.00') }
        </h3>

    </Link>

);

export default ExpenseListItem;