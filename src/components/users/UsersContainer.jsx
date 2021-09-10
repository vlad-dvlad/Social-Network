import React from 'react';
import {connect} from "react-redux";
import {
    setPage,
    toggleIsFollowingProgress,
    getUsers, followUsers, unFollowUsers
} from "../../redux/reducers/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage} users={this.props.users}
                       followUsers={this.props.followUsers} unFollowUsers={this.props.unFollowUsers}
                       onPageChanged={this.onPageChanged} isFetching={this.props.isFetching}
                       followingInProgress={this.props.isFollowingInProgress}/>
            </>);
    }
}



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
    };
}

export default compose(
    connect(mapStateToProps, {
        followUsers,
        unFollowUsers,
        setPage,
        toggleIsFollowingProgress,
        getUsers,
    }),
    withAuthRedirect
)(UsersContainer);




