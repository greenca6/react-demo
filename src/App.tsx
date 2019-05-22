import * as React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import { MainLayout } from './layouts';

const App = () => (
  <Router>
    <MainLayout>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route path={path} component={component} />
        ))}
        <Redirect from ="/" to={routes[0].path} />
      </Switch>
    </MainLayout>
  </Router>
)

export default App;
