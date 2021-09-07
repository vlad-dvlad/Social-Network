import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/authReducer";




class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                let imgUrl;
                if(response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                        .then(response => {
                            imgUrl = response.data.photos.small;
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