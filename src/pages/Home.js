import React, { useState } from 'react';
import withSidebarLayout from "../layouts/withSidebarLayout"
import { get } from 'lodash';
import { inject, observer } from 'mobx-react';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        name: 'Test',
        age: 23
      }
    }
  }
  
  componentDidMount() {
    // Spread Operator

  }

  render() {
    
    return (
      <div>
        <h1>This is our HomePage.</h1>
        {/* <h1>Welcome {get(props, 'userStore.user', null)}</h1> */}
        {/* <button onClick={() => setCounter(counter + 1)}>Counter++</button> */}
      </div>
    )
  }
}

// export default withSidebarLayout(inject(['userStore'])(observer(Home)), { title: 'Home' });
export default withSidebarLayout(Home, { title: 'Home' });