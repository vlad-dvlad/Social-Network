import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {showHideNavBar} from "../../redux/reducers/navbarReducer";

class HeaderContainer extends React.Component {


    render() {
        return (
            <Header isAuth={this.props.isAuth} imgUrl={this.props.imgUrl} isShowedNavBar={this.props.isShowedNavBar}
                    showHideNavBar={this.props.showHideNavBar}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        imgUrl: state.auth.userPhoto,
        isShowedNavBar: state.navbar.isShowedNavBar,
    }
}

export default connect(mapStateToProps, {showHideNavBar})(HeaderContainer);