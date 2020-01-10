import { createStore } from 'redux';

// action generator - functions that return action objects
// try to always default to an empty object
const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({ 
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({ type: 'RESET' });

// kick things off: create the store; only called once
// set default state with initial values
const store = createStore((state = { count: 0 }, action) => {
    
    // action type switch statement
    switch (action.type) {

        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
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
// now using an action generator, passing a payload object
store.dispatch(incrementCount({
    incrementBy: 5
}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({
    decrementBy: 5
}));

store.dispatch(setCount({
    count: 101
}));