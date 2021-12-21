import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {showHideNavBar} from "../../redux/reducers/navbarReducer";

class HeaderContainer extends React.Component {


    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        imgUrl: state.auth.imgUrl,
        isShowedNavBar: state.navbar.isShowedNavBar,
    }
}

export default connect(mapStateToProps, {showHideNavBar})(HeaderContainer);