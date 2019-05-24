import * as React from 'react';
import Typography from '@material-ui/core/Typography';

const About = () => (
  <>
    <Typography variant="h2" gutterBottom>About</Typography>
    <Typography variant="subtitle1">
      This application is built using <a href="https://reactjs.org/" target="_blank">React</a>, and gets it's data/photos from the awesome open API from NASA.
      <br />
      For more information visit <a href="https://api.nasa.gov/api.html#MarsPhotos" target="_blank">NASA's OpenAPI website</a>
    </Typography>
  </>
);

export default About;