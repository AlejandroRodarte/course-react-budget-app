import { login, logout } from '../../actions/auth';

test('Should return correct login action object', () => {

    const uid = 'unique-user-id';

    const action = login(uid);

    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });

});

test('Should return correct logout action object', () => {
    const action = logout();
    expect(action).toEqual({ type: 'LOGOUT' });
});
