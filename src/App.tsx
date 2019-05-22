import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/styles';

const routes = [
  { path: '/about', label: 'About', component: () => 'about' },
  { path: '/explorer', label: 'Explorer', component: () => 'explorer' },
];

interface AppProps {
  classes: any
}

const App = withStyles(styles)(({ classes }: AppProps) => (
  <div className={classes.root}>
    <CssBaseline />
    <Router>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Mars Rover Explorer 🚀
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
        <div className={classes.toolbar} />
        <List>
          {routes.map(({ label, path }) => (
            <ListItem button key={label} component="a" href={`#${path}`}>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          {routes.map(({ path, component }) => (
            <Route path={path} component={component} />
          ))}
          <Redirect from="/" to="/about" />
        </Switch>
      </main>
    </Router>
  </div>
));

export default App;
