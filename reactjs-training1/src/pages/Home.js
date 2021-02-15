import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import withSideBarLayout from '../layouts/withSidebar';


function Home() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Button variant="primary">Primary</Button>
      <span className="color-red">This is HomePage</span>
      
    </div>
  )
}

export default withSideBarLayout(Home);