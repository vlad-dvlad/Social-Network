import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUser} from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUser();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        imgUrl: state.auth.imgUrl,
    }
}

export default connect(mapStateToProps, {
    getAuthUser
})(HeaderContainer);