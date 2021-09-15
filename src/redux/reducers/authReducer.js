import {authAPI} from "../../api/authAPI";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER = 'SET-USER';



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

        case SET_USER: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }

        default: return state;
    }
}

export const setAuthUserData = (userId, email, login, userPhoto) => ({ type: SET_USER_DATA, data:{userId, email, login, userPhoto} })
export const loginUser = (userId, email, password, rememberMe, captcha) => ( {type: SET_USER, data:{userId, email, password, rememberMe, captcha} });

// Thunks
export const getAuthUser = () => {
    return (dispatch) => {
        authAPI.getAuthUser().then(response => {
            let imgUrl;
            if(response.resultCode === 0) {
                const {id, email, login} = response.data;
                authAPI.getAuthUserAvatar(id).then(response => {
                    imgUrl = response;
                })

                dispatch(setAuthUserData(id, email, login, imgUrl));
            }
        });
    }
}

export const setLoginUser = (email, password, rememberMe, captcha = true) => {
    return (dispatch) => {
        authAPI.loginUser(email, password, rememberMe, captcha).then( response => {
           if(response.resultCode === 0) {
               const userId = response.data.userId;
               dispatch(loginUser(userId, email, password, rememberMe));
           }
        });
    }
}

export default authReducer;