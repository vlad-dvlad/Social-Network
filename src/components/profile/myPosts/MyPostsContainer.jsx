import MyPosts from "./MyPosts";
import {addPostClear} from "../../../redux/reducers/profileReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        imgUrl: state.auth.userPhoto,
        posts: state.profilePage.posts,
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPostClear
})(MyPosts);

export default MyPostsContainer;