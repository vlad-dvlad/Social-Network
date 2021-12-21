const SHOW_HIDE_NAVBAR = "social-network/navbar/SHOW_HIDE_NAVBAR";

const initialState = {
    isHiddenNavBar: true,
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HIDE_NAVBAR:
            return {isHiddenNavBar: action.isHiddenNavBar}

        default: return state;
    }
}

export const showHideNavBar = (isHiddenNavBar) => ({type: SHOW_HIDE_NAVBAR, isHiddenNavBar})

export default navbarReducer;