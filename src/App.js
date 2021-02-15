import 'antd/dist/antd.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './helpers/PrivateRoute';

import { Provider } from 'mobx-react';

import mobx from './stores/index';


//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import Movies from './pages/Movies';
import About from './pages/About';
function App() {
  const stores = mobx();
  // console.log("Stores: ", stores);
  console.log("NODE_ENV: ", process.env.NODE_ENV);
  console.log("API END POINT: ", process.env.REACT_APP_API_ENDPOINT);
  console.log("FOO: ", process.env.REACT_APP_FOO);

  return (
    <div className="App">
      <Provider {...stores}>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          {/* <Route path="/sample" render={routerProps => <Sample {...routerProps} sampleProp={"sample"}/>} /> */}
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/movies" exact component={Movies} />

          <PrivateRoute path="/about" exact component={About} />

          <Route path='/default' render={() => <Redirect to= "/" />} />
          <Route component={NoMatch} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
