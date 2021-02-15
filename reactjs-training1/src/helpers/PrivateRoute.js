//@ts-check
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { get } from 'lodash';
import { inject, observer } from 'mobx-react';

class PrivateRoute extends React.Component {
  render() {
    const isLoggedIn = get(this.props, 'authStore.isLoggedIn', false);
    console.log("isLogged: ",isLoggedIn);
    const WrappedComponent = this.props.component;
    if (!isLoggedIn) {
      console.log("Not Logged...");
      // not logged in so redirect to login page with the return url
      return <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
    }
    return (
      <Route {...this.props} render={renderProps => {
        // authorised so return component
        return <WrappedComponent {...renderProps} />
      }} />
    )
  }
}
export default inject(['authStore'])(observer(PrivateRoute));