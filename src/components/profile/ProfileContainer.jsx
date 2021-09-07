import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/profileAPI";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        profileAPI.getProfile(userId).then(response => {
                this.props.setUserProfile(response);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
}

let UrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile,
})(UrlDataContainerComponent);