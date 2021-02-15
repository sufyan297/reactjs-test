import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import withLoginLayout from '../layouts/withLogin';
function Login(props) {
  const [ mail, setEmail ] = useState(0);
  const [ password, setPassword ] = useState(0);

  console.log("mail: ", mail);
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300, background: '#fff', padding: 10}}>
        <Form onSubmit={(e) => {
          e.preventDefault();
          console.log("Email: ", mail);
          console.log("Password: ", password);
          props.authStore.onLogin({ username: mail, password });
          props.history.push('/');
        }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter username" onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}
export default withLoginLayout(Login, {title: 'Login'});