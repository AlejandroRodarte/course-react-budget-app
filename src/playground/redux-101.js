import { createStore } from 'redux';

// kick things off: create the store; only called once
// set default state with initial values
const store = createStore((state = { count: 0 }, action) => {
    
    // action type switch statement
    switch (action.type) {

        case 'INCREMENT':

            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;

            return {
                count: state.count + incrementBy
            };

        case 'DECREMENT':

            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;

            return {
                count: state.count - decrementBy
            };
        
        case 'SET':
            return {
                count: action.count
            };

        case 'RESET':
            return {
                count: 0
            };

        default:
            return state;

    }

});


// subscribe to the store
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// unsubscribe();

// dispatching an action
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
});

store.dispatch({
    type: 'SET',
    count: 101
});