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
import {
    getCurrentPage, getFollowingProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersItems, getUsersSuper,
} from "../../redux/selectors/usersSelectors";



class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNum) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNum, pageSize);
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
        users: getUsersItems(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getFollowingProgress(state),
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




