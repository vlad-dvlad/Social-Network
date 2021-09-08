import React from 'react';
import {connect} from "react-redux";
import {
    setPage,
    follow,
    setUsers,
    setUsersCount,
    toggleIsFetching,
    unFollow, toggleIsFollowingProgress
} from "../../redux/reducers/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {userAPI} from "../../api/userAPI";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setUsersCount(response.totalCount)
            });
    }

    onPageChanged = (pageNum) => {
        this.props.setPage(pageNum);
        this.props.toggleIsFetching(true);

        userAPI.getUsers(pageNum, this.props.pageSize).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage} users={this.props.users}
                       follow={this.props.follow} unFollow={this.props.unFollow}
                       onPageChanged={this.onPageChanged} isFetching={this.props.isFetching}
                       followingInProgress={this.props.isFollowingInProgress}
                       toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}/>
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

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setPage,
    setUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress,
})(UsersContainer);
