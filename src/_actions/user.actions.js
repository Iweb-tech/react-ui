import { userConstants } from "../_constants";
import { userService } from "../_services";
export const userActions = {
    login,
    logout,
    getAll
};
function login(username, password,history) {
    return dispatch => {
        
        dispatch(request({ username }));
        userService.login(username, password)
            .then(
                data => {
                    console.log('user autheticated');
                    console.log(data);
                    dispatch(success(data));
                    localStorage.setItem('user', JSON.stringify(data));
                    history.push('/');
            })
            .catch(error=>{
                console.log(error);
                dispatch(failure(error)); 
            })
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }

}
function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT }
}
function getAll() {

}
