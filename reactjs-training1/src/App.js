import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import { Provider } from 'mobx-react';

//Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Login from './pages/Login';

import PrivateRoute from './helpers/PrivateRoute';
import mobx from './stores';
import './css/style.scss';

function App() {
  const stores = mobx();
  console.log("Stores: ", stores);
  return (
    <div className="App">
      <Provider {...stores}>
        <Switch>
          <PrivateRoute path={'/'} exact={true} component={Home} />

          <Route path={'/login'} component={Login} />
          <Route path={'/about'} component={About} />

          <Route component={NotFound} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
