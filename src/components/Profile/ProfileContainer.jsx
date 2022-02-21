import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { useMatch } from 'react-router-dom';
import * as axios from 'axios';
import Preloader from '../../common/Preloader';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }
    render() {
        if (!this.props.profile) {
            return (<Preloader />);
        }
        return (<Profile {...this.props} />);
    }
}

const ProfileURLMatch = (props) => {
    let match = useMatch('/profile/:userId');
    return <ProfileContainer match={match} {...props} />
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId
})

export default connect(mapStateToProps, { setUserProfile })(ProfileURLMatch);