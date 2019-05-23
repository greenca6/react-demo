import * as React from 'react';
import RoverService from './RoverService';

let service;

const withRoverService = (WrappedComponent) => (
  class extends React.Component {
    render() {
      if (!service) {
        service = new RoverService();
      }

      return (
        <WrappedComponent {...this.props} roverService={service} />
      );
    }
  }
);

export default withRoverService;