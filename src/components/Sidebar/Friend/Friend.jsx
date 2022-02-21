import s from '../Sidebar.module.css';

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.friend__avatar}></div>
            <span className={s.friend__name}>{props.name}</span>
        </div>
    );
}

export default Friend;