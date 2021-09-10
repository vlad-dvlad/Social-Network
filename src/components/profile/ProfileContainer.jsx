import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";



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


export default compose(
    connect(mapStateToProps, {getProfile} ),
    withRouter,
    withAuthRedirect
)(ProfileContainer);