import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Hello
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default App;
