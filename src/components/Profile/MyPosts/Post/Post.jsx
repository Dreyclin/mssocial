import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={props.avatarImg.small} alt="" className={s.avatar} />
            <span className={s.postText}>{props.message}</span>
            <div className={s.likeButton}>
                <span>likes</span> {props.likeCount}
            </div>
        </div>
    );
}

export default Post;