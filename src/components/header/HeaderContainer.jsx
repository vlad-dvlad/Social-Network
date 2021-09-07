import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/authReducer";
import {authAPI} from "../../api/authAPI";




class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.getAuthUser().then(response => {
                let imgUrl;
                if(response.resultCode === 0) {
                    const {id, email, login} = response.data;
                    authAPI.getAuthUserAvatar(id).then(response => {
                            imgUrl = response;
                        })

                    this.props.setAuthUserData(id, email, login, imgUrl);
                }
            });
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
    setAuthUserData
})(HeaderContainer);