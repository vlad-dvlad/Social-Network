import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push("/login");
            }
        }

        this.props.getProfile(userId);

        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        }

    }

    render() {

        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    };
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile} ),
    withRouter,
    withAuthRedirect
)(ProfileContainer);