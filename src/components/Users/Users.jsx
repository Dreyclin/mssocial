import s from './Users.module.css';
import user from '../../assets/img/user.png'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.users__wrapper}>
            <div>
                {
                    pages.map(p => { return <span className={props.currentPage === p ? s.currentActive : ''} onClick={() => { props.onChangePage(p) }}>{p}</span> })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className="">
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : user} className={s.user__photo} alt='' />
                            </NavLink>

                        </div>
                        <div className="">
                            {u.followed ? <button onClick={() => props.follow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{`u.location.country`}</div>
                            <div>{`u.location.city`}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;