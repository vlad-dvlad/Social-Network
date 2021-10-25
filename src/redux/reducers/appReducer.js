import {getAuthUser} from "./authReducer";

const INITIALIZED_SUCCESS = "social-network/app/INITIALIZED-SUCCESS";

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializedApp = () => async (dispatch) => {
    await dispatch(getAuthUser());
    await dispatch(initializedSuccess())
}

export default appReducer;