import s from './Avatar.module.css'
import avatar from '../../../assets/img/avatar.jpg'

const Avatar = (props) => {
    return (
        <div className={s.photoBlock}>
            <img src={props.avatarImg.large} alt="avatar" />
            <button>Edit</button>
        </div>
    );
}

export default Avatar;