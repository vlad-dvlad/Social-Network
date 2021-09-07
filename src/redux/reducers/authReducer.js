const SET_USER_DATA = 'SET-USER-DATA';



let initialState = {
    userId: null,
    email: null,
    login: null,
    userPhoto: null,
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

export default authReducer;