import * as React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import routes from './routes';
import { MainLayout } from './layouts';

const App = () => (
  <Router>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <MainLayout>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} component={component} />
          ))}
          <Redirect from ="/" to={routes[0].path} />
        </Switch>
      </MainLayout>
    </MuiPickersUtilsProvider>
  </Router>
);

export default App;
