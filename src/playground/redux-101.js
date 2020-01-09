import { createStore } from 'redux';

// kick things off: create the store; only called once
// set default state with initial values
const store = createStore((state = { count: 0 }) => {
    return state;
});

// get the current app state
console.log(store.getState());