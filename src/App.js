import 'antd/dist/antd.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './helpers/PrivateRoute';

import { Provider } from 'mobx-react';

import mobx from './stores';


//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import Movies from './pages/Movies';

function App() {
  const stores = mobx();
  console.log("Stores: ", stores);
  return (
    <div className="App">
      <Provider {...stores}>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          {/* <Route path="/sample" render={routerProps => <Sample {...routerProps} sampleProp={"sample"}/>} /> */}
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/movies" exact component={Movies} />

          <Route path='/default' render={() => <Redirect to= "/" />} />
          <Route component={NoMatch} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
