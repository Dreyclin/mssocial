import { NavLink } from 'react-router-dom';
import logoSocial from '../../assets/img/logoSocial.png'
import s from './Header.module.css'

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logoSocial} alt='img' />
      <div className={s.loginBlock}>
        {
          props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
}

export default Header;