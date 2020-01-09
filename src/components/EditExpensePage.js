import React from 'react';

const EditExpensePage = (props) => (
    <div>
        Editing item { props.match.params.id }
    </div>
);

export default EditExpensePage;