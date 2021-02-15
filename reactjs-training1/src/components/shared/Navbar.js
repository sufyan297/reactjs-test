import { Navbar, Form, Nav, Button, FormControl } from 'react-bootstrap';
import { get } from 'lodash';
function NavbarContainer(props) {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>

        <h3 style={{color: 'white'}}>Welcome {get(props, 'authStore.user.username', null)}</h3>
        <Button variant="outline-info" onClick={() => {
            props.authStore.onLogout();
            props.history.push('/login')
          }}>Logout</Button>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" onClick={() => props.history.push('/login')}>Search</Button>
        </Form> */}
      </Navbar>
    </div>
  )
}
export default NavbarContainer;