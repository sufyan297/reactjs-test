import React, { useState } from 'react';
import withLoginLayout from "../layouts/withLoginLayout"


function Home() {
  const [ counter, setCounter ] = useState(0);
  return (
    <div>
      <h1>This is our HomePage.</h1>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Counter++</button>
    </div>
  )
}
export default withLoginLayout(Home, { title: 'Home' });