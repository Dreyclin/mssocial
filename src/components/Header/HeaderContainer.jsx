import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import * as axios from "axios";
import { setAuthUserData } from '../../redux/authReducer'

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then((response) => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data.id, response.data.data.login, response.data.data.email)     
            }
        })
        console.log(this.props);
    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);