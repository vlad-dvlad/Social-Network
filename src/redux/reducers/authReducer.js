import {authAPI} from "../../api/authAPI";
import {stopSubmit} from "redux-form";
import {securityAPI} from "../../api/securityAPI";

const SET_USER_DATA = 'social-network/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    userPhoto: null,
    rememberMe: false,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }

        default: return state;
    }
}

export const setAuthUserData = (userId = 19470, email, login, userPhoto, isAuth) =>
    ({ type: SET_USER_DATA, payload:{userId, email, login, userPhoto, isAuth} })

export const getCaptchaUrlSuccess = (captchaUrl) =>
    ({ type: GET_CAPTCHA_URL_SUCCESS, payload:{captchaUrl} })

// Thunks
export const getAuthUser = () => async (dispatch) => {
    let response = await authAPI.getAuthUser()
    let imgUrl;
    if (response.resultCode === 0) {
        const {userId, email, login} = response.data;
        imgUrl = await authAPI.getAuthUserAvatar(userId);
        dispatch(setAuthUserData(userId, email, login, imgUrl, true));
    }
}

export const setLoginUser = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.loginUser(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
        dispatch(getAuthUser());
    } else {
        if(response.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.messages.length > 0 ? response.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const setLogoutUser = () => async (dispatch) => {
    let response = await authAPI.logoutUser();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captcha = response.data.url;

    dispatch(getCaptchaUrlSuccess(captcha));

}

export default authReducer;