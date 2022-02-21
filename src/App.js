import './App.css';
import SidebarContainer from './components/Sidebar/SidebarContainer'
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <div>
      <HeaderContainer />
      <div className='content__wrapper'>
        <div className='app-wrapper'>
          <SidebarContainer />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='dialogs/*' element={<DialogsContainer />} />
              <Route path='profile/*' element={<ProfileContainer />} />
              <Route path='feed/' element={<NewsFeed />} />
              <Route path='music/' element={<Music />} />
              <Route path='settings/' element={<Settings />} />
              <Route path='users/' element={<UsersContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
