import React from 'react';
import { Helmet } from 'react-helmet';
import { get } from 'lodash';
import { inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';

const withLoginLayout = (WrappedComponent, extra) => {
  return inject(['authStore'])(class LoginLayout extends React.Component {

    render() {
      const isLoggedIn = get(this.props, 'authStore.isLoggedIn', false);
      if (isLoggedIn) {
        return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />
      }
      return (
        <div style={{height: '100vh', backgroundColor: '#fafafa'}}>
          <Helmet>
            <title>{get(extra, 'title', null)}</title>
          </Helmet>

          <div style={{minHeight: 500}}>
            <WrappedComponent {...this.props} />
          </div>

          <footer style={{}}>
            This is footer
          </footer>
        </div>
      )
    }
  })
}

export default withLoginLayout;