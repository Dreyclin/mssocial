import s from './Profile.module.css'
import Avatar from './Avatar/Avatar';
import Info from './InfoBlock/Info';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <div className={s.profile_grid_container}>
                <Avatar avatarImg={props.profile.photos}/>
                <Info profile={props.profile} />
            </div>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;