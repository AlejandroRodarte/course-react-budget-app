import authReducer from '../../reducers/auth';

test('Should set uid on login', () => {

    const uid = 'unique-user-id';

    const action = {
        type: 'LOGIN',
        uid
    };

    const state = authReducer(undefined, action);

    expect(state.uid).toBe(uid);

});

test('Should unset uid on logout', () => {

    const uid = 'unique-user-id';

    const action = { type: 'LOGOUT' };

    const state = authReducer({ uid }, action);

    expect(state.uid).toBe(undefined);

});
