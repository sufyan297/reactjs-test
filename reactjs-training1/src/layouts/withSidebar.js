import React from 'react';
import NavbarContainer from '../components/shared/Navbar';
import { inject, observer } from 'mobx-react';

const withSideBarLayout = (WrappedComponent, extra) => {
  return inject(['authStore'])(observer(class SidebarLayout extends React.Component {

    render() {
      return (
        <div style={{height: '100vh'}}>
          <NavbarContainer {...this.props} />
          <WrappedComponent {...this.props} />
          <footer>
            Test
          </footer>
        </div>
      )
    }
  }))
}

export default withSideBarLayout;