import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Rovers from '../../enums/Rovers';

const Explorer = () => (
  <>
    <Typography variant="h2" gutterBottom>Rover Explorer 🚀</Typography>
    <Typography variant="subtitle1">
      Fill in the form below to search for photos taken by one of the {Object.keys(Rovers).length} Mars Rovers
    </Typography>
  </>
);

export default Explorer;