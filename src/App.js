import 'antd/dist/antd.css';

import { Route, Switch, Redirect } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/sample" render={routerProps => <Sample {...routerProps} sampleProp={"sample"}/>} /> */}
        <Route path="/login" component={Login} />
        <Route path='/default' render={() => <Redirect to= "/" />} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
