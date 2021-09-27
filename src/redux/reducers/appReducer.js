import {getAuthUser} from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

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

export const initialized = () => (dispatch) => {

}

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(getAuthUser());

    promise.then(() => {
        dispatch(initializedSuccess())
    });
}

export default appReducer;