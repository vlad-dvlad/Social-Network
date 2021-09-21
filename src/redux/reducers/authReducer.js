import {authAPI} from "../../api/authAPI";
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
                ...action.data,
                isAuth: true
            }

        default: return state;
    }
}

export const setAuthUserData = (userId, email, login, userPhoto) => ({ type: SET_USER_DATA, data:{userId, email, login, userPhoto} })


// Thunks
export const getAuthUser = () => {
    return (dispatch) => {
        authAPI.getAuthUser().then(response => {
            let imgUrl;
            if(response.resultCode === 0) {
                const {userId, email, login} = response.data;
                authAPI.getAuthUserAvatar(userId).then(response => {
                    imgUrl = response;
                })

                dispatch(setAuthUserData(userId, email, login, imgUrl));
            }
        });
    }
}

export const setLoginUser = (email, password, rememberMe, captcha = true) => {
    return (dispatch) => {
        authAPI.loginUser(email, password, rememberMe, captcha).then( response => {
           if(response.resultCode === 0) {
                dispatch(getAuthUser());
           }
        });
    }
}

export default authReducer;