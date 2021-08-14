import { Redirect, Route, Switch } from 'react-router-dom';

import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';
import { useAuth } from './context/authContext';
import { Fragment } from 'react';

function App() {
  const authCtx = useAuth();

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-200">
      <Switch>
        {!authCtx.user && (
          <Fragment>
            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/signin">
              <Signin />
            </Route>

            <Route path="*">
              <Redirect to="signin" />
            </Route>
          </Fragment>
        )}
        {authCtx.user && (
          <Fragment>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Fragment>
        )}
      </Switch>
    </div>
  );
}

export default App;
