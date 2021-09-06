const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
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
        default: return state;
    }
}


export const follow = (userId) => ({type: FOLLOW, userId: userId,})
export const unFollow = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setPage = (page) => ({type: SET_CURRENT_PAGE, currentPage: page})
export const setUsersCount = (count) => ({type: SET_TOTAL_COUNT, totalUsersCount: count})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})

export default usersReducer;