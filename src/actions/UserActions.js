export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function handleLogin() {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    VK.login(r => {
      if (r.session) {
        let username = r.session.user.firstname;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: username,
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Login error'),
        });
      }
    });
  };
}
