import { connect } from 'react-redux';
import { updateNewPostActionCreator, addPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts'

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profileAvatar: state.profilePage.profile.photos
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            dispatch(updateNewPostActionCreator(text));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;