import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to={'/login'}/>

            return <Component {...this.props}/>
        }
    }

    const mapStateToPropsRedirect = (state) => {
        return {
            isAuth: state.auth.isAuth,
        }
    }

    const ConnectedRedirectComponent = connect(mapStateToPropsRedirect, {})(RedirectComponent);

    return ConnectedRedirectComponent;
}