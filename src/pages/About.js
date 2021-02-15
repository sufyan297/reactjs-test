import { useState, useEffect } from 'react';
import withSidebarLayout from '../layouts/withSidebarLayout';
import IsOnline from '../components/login/IsOnline';
import { inject, observer } from 'mobx-react';
import { get } from 'lodash';

function About(props) {
  const userStatus = IsOnline()
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  
  
  function onChange(value) {
    setUser(value);
    console.log("User: ", user);
  }
  function onChangePassword(value) {
    setPassword(value);
    console.log("Password:", value);
  }
  useEffect(() => {
    console.log("useEffect: ");
    console.log("didMount");
  }, []);

  useEffect(() => {
    console.log("DidUpdate");
    console.log("AFTER  = User: ", user);
    console.log("AFTER  = Password: ", password);
  });


  // console.log("Status: ", userStatus);
  return (
    <div>
      About Us
      Movie Title: {get(props, 'movieStore.movie.Title', null)}
      <input type='text' onChange={(e) => onChange(e.target.value)} />
      <input type='text' onChange={(e) => onChangePassword(e.target.value)} />

      <button onClick={() => {
        props.userStore.setUser({ ...props.userStore.user, username: user})
      }}>Change Username</button>
    </div>
  )
}
export default withSidebarLayout(inject(['movieStore'])(observer(About)));