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
                ...action.payload,
                isAuth: true
            }

        default: return state;
    }
}

export const setAuthUserData = (userId = 19470, email, login, userPhoto, isAuth) =>
    ({ type: SET_USER_DATA, payload:{userId, email, login, userPhoto, isAuth} })


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

                dispatch(setAuthUserData(userId, email, login, imgUrl, true));
            }
        });
    }
}

export const setLoginUser = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.loginUser(email, password, rememberMe).then( response => {
           if(response.resultCode === 0) {
                dispatch(getAuthUser());
           }
        });
    }
}

export const setLogoutUser = () => {
    return (dispatch) => {
        authAPI.logoutUser().then(response => {
           if(response.resultCode === 0) {
               dispatch(setAuthUserData(null, null, null, null, true));
           }
        });
    }
}

export default authReducer;