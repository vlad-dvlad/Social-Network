import {profileAPI} from "../../api/profileAPI";
import {stopSubmit} from "redux-form";

const ADD_POST = 'social-network/profile/ADD-POST';
const DELETE_POST = 'social-network/profile/DELETE-POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_STATUS = 'social-network/profile/SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'social-network/profile/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'social-network/profile/SAVE_PROFILE_SUCCESS';




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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }

        case SAVE_PROFILE_SUCCESS: {
            return {
                ...state,
                profile: action.profile,
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
export const savePhotoSuccess = (photos) => ({type:SAVE_PHOTO_SUCCESS, photos});


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

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if(response.data.resultCode === 0){
        dispatch(getProfile(userId));
    } else {
        dispatch(stopSubmit("editProfile", {_error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;