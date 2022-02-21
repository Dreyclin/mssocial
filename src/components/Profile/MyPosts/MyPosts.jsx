import react from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => (<Post message={p.message} likeCount={p.likeCount} id={p.id} key={p.id} avatarImg={props.profileAvatar}/>))
    let newPostElement = react.createRef();

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    }

    return (
        <div className={s.postsBlock}>
            <p className={s.postsHeader}>My posts</p>
            <div className={s.publishPost}>
                <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement} placeholder='your news...' cols="135" rows="5" className={s.postInput} />
                <button className={s.publicPostButton} onClick={addPost}>Send</button>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;