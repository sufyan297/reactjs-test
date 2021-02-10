import React, { useState } from 'react';
import withSidebarLayout from "../layouts/withSidebarLayout"
import { get } from 'lodash';
import { inject, observer } from 'mobx-react';


function Home(props) {
  const [ counter, setCounter ] = useState(0);
  return (
    <div>
      <h1>This is our HomePage.</h1>
      <h1>Welcome {get(props, 'userStore.user', null)}</h1>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Counter++</button>
    </div>
  )
}
export default withSidebarLayout(inject(['userStore'])(observer(Home)), { title: 'Home' });