const SHOW_HIDE_NAVBAR = "social-network/navbar/SHOW_HIDE_NAVBAR";

const initialState = {
    isShowedNavBar: false,
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HIDE_NAVBAR:
            return {isShowedNavBar: action.isShowedNavBar}

        default: return state;
    }
}

export const showHideNavBar = (isShowedNavBar) => ({type: SHOW_HIDE_NAVBAR, isShowedNavBar})

export default navbarReducer;