import React from 'react';
import { Helmet } from 'react-helmet'

//UI
import { Layout, Row, Col } from 'antd';

//CSS
import '../css/style.scss';

const withLoginLayout = (WrappedComponent, extra) => {
  return class withLoginLayout extends React.Component {
    render() {
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
  }
}
export default withLoginLayout;