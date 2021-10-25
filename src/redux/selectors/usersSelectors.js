import {createSelector} from "reselect";

export const getUsersItems = (state) => {
    return state.usersPage.users;
}

export const getUsersSuper = createSelector(getUsersItems, (users) => {
    return users.filter(u => true);
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingProgress = (state) => {
    return state.usersPage.isFollowingInProgress;
}


