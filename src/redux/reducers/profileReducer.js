import {profileAPI} from "../../api/profileAPI";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profile: null,
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 13},
        {id: 2, message: 'It\'s my first post', likesCount: 15}
    ],
    newPostText: 'It kamasutra'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}],
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })

// Thunks
export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response));
        });
    }
}


export default profileReducer;