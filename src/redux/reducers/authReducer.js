import {authAPI} from "../../api/authAPI";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    userPhoto: null,
    rememberMe: false,
    isFetching: false,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default: return state;
    }
}

export const setAuthUserData = (userId = 19470, email, login, userPhoto, isAuth) =>
    ({ type: SET_USER_DATA, payload:{userId, email, login, userPhoto, isAuth} })


// Thunks
export const getAuthUser = () => (dispatch) => {
    return authAPI.getAuthUser().then(response => {
        let imgUrl;
        if (response.resultCode === 0) {
            const {userId, email, login} = response.data;
            authAPI.getAuthUserAvatar(userId).then(response => {
                imgUrl = response;
            })

            dispatch(setAuthUserData(userId, email, login, imgUrl, true));
        }
    });
}

export const setLoginUser = (email, password, rememberMe) => (dispatch) => {
    authAPI.loginUser(email, password, rememberMe).then(response => {
        if (response.resultCode === 0) {
            dispatch(getAuthUser());
        } else {
            let message = response.messages.length > 0 ? response.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}));
        }
    });
}

export const setLogoutUser = () => (dispatch) => {
    authAPI.logoutUser().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, null, false));
        }
    });
}


export default authReducer;