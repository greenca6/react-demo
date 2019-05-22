import * as React from 'react';
import Typography from '@material-ui/core/Typography';

const About = () => (
  <>
    <Typography variant="h2" gutterBottom>About</Typography>
    <Typography variant="subtitle1">
      This application is built using React, and gets it's data/photos from the awesome open API from NASA.
      <br />
      For more information visit NASA's OpenAPI website
    </Typography>
  </>
);

export default About;