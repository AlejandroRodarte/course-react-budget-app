import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import 'react-dates/initialize';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configure-store';

import { startSetExpenses } from './actions/expenses';

import { firebase } from './firebase/firebase';

import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => ReactDOM.render(jsx, document.getElementById('app')));

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('Log in');
    } else {
        console.log('Log out');
    }
});
