import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {setLogoutUser} from "../../redux/reducers/authReducer";
import {showHideNavBar} from "../../redux/reducers/navbarReducer";


class NavbarContainer extends React.Component {

    render() {
        return (
            <Navbar {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isHiddenNavBar: state.navbar.isHiddenNavBar
    }
}

export default connect(mapStateToProps, {
    setLogoutUser,
    showHideNavBar,
})(NavbarContainer);