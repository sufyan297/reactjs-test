import React from 'react';
import { Helmet } from 'react-helmet'
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import { get } from 'lodash';
//UI
import { Layout, Row, Col } from 'antd';

//CSS
import '../css/style.scss';

const withLoginLayout = (WrappedComponent, extra) => {
  return inject(['userStore'])(observer(class LoginLayout extends React.Component {
    render() {
      const isLoggedIn = get(this.props, 'userStore.isLoggedIn', false);
      if (isLoggedIn) {
        // logged in so redirect to login page with the return url
        return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />
      }
      return (
        <>
          <Helmet>
            <title>{extra.title || 'Home Page'}</title>
          </Helmet>

          <Layout>
            <WrappedComponent {...this.props} />
          </Layout>
        </>
      )
    }
  }))
}
export default withLoginLayout;