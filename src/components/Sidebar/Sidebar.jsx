import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css'
import Friend from './Friend/Friend';

const Sidebar = (props) => {
    let friendsElements = props.sidebar.friends.map(friendData => <Friend name={friendData.name} id={friendData.id} key={friendData.id} />)
    
    return (
        <nav className={s.sidebar}>
            <div className={s.item}>
                <NavLink to='/profile' className={(navData) => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={(navData) => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/feed' className={(navData) => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={(navData) => navData.isActive ? s.active : s.item}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={(navData) => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={(navData) => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
            <h3 className={s.sidebar__friends}>Friends</h3>
            <div className={s.friends}>
                {friendsElements}
            </div>
        </nav>
    );
}



export default Sidebar;