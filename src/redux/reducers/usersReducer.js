import {userAPI} from "../../api/userAPI";
import {updateObjectInArray} from "../../utils/objectHelpers";

const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET-USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'social-network/users/SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        }

        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            };
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        }

        case TOGGLE_IS_FETCHING: {
            return  {
                ...state,
                isFetching: action.isFetching
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        }
        default: return state;
    }
}

// Action Creators
export const follow = (userId) => ({type: FOLLOW, userId: userId,})
export const unFollow = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setPage = (page) => ({type: SET_CURRENT_PAGE, currentPage: page})
export const setUsersCount = (count) => ({type: SET_TOTAL_COUNT, totalUsersCount: count})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId));

    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
}

//Thunks
export const getUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setPage(page));

    let response = await userAPI.getUsers(page, pageSize)

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setUsersCount(response.totalCount));
}

export const followUsers = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.followUser.bind(userAPI), follow);
}

export const unFollowUsers = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.unfollowUser.bind(userAPI), unFollow);
}

export default usersReducer;