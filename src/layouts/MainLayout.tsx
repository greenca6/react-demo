import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import routes from '../routes';
import styles from '../styles/styles';


const MainLayout = withStyles(styles)(
  class extends React.Component<{ classes: any, children: any }> {
    render() {
      const { classes, children } = this.props;

      return (
        <div className={classes.root}>
          <CssBaseline />
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
            {children}
          </main>
        </div>
      );
    }
  }
);

export default MainLayout;
