import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId);
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
    getProfile
})(UrlDataContainerComponent);