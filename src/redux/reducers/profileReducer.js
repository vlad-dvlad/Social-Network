import {profileAPI} from "../../api/profileAPI";

const ADD_POST = 'social-network/profile/ADD-POST';
const DELETE_POST = 'social-network/profile/DELETE-POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_STATUS = 'social-network/profile/SET-STATUS';


let initialState = {
    profile: null,
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 13},
        {id: 2, message: 'It\'s my first post', likesCount: 15}
    ],
    newPostText: '',
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, message: action.newPost, likesCount: 0}],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            }
        }
        default:
            return state;
    }
}

export const addPost = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })
export const setStatus = (status) => ({ type: SET_STATUS, status: status })
export const deletePost = (postId) => ({type: DELETE_POST, postId});

// Thunks
export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;