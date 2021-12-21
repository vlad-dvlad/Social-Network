import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {setLogoutUser} from "../../redux/reducers/authReducer";
import {showHideNavBar} from "../../redux/reducers/navbarReducer";


class NavbarContainer extends React.Component {

    onOffScroll = (value) => {
        if(value) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "scroll";
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.isShowedNavBar !== prevProps.isShowedNavBar){
            this.onOffScroll(this.props.isShowedNavBar);
        }
    }

    render() {
        return (
            <Navbar {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isShowedNavBar: state.navbar.isShowedNavBar
    }
}

export default connect(mapStateToProps, {
    setLogoutUser,
    showHideNavBar,
})(NavbarContainer);