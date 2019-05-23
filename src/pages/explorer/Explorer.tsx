import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import withRoverService from '../../services/withRoverService';
import RoverService from '../../services/RoverService';
import Rover from '../../model/Rover';
import Camera from '../../model/Camera';
import PhotoResponse from '../../model/PhotoResponse';


class Explorer extends React.Component<{ roverService: RoverService }> {
  state = {
    camera: null,
    rover: null,
    busy: false,
  };
  searchResults: PhotoResponse = null;

  handleRoverChange = ({ target }) => {
    this.setState({ rover: target.value });
  };

  handleCameraChange = ({ target }) => {
    this.setState({ camera: target.value });
  };

  handleSearch = () => {
    const { camera, rover } = this.state;
    const date = '2015-06-03';
    this.setState({ busy: true });
    this.props.roverService.getPhotos(rover, camera, date)
      .then((data: PhotoResponse) => {
        this.searchResults = data;
        this.setState({ busy: false });
      })
      .catch(e => console.log(e));
  };

  renderResults() {
    if (this.state.busy) {
      return <CircularProgress />;
    }

    if (!this.searchResults) {
      return null;
    }

    if (this.searchResults.photos.length === 0) {
      return <Typography><i>No Mars Photos taken :(</i></Typography>
    }

    return (
      <GridList cols={2} style={{ width: 'auto' }} cellHeight={450}>
        {this.searchResults.photos.map(photo => (
          <GridListTile key={photo.id}>
            <img src={photo.img_src} alt={photo.camera.full_name} style={{ height: 'auto' }} />
            <GridListTileBar
              title={photo.camera.full_name}
            />
          </GridListTile>
        ))}
      </GridList>
    );
  }

  render() {
    return (
      <>
        <Typography variant="h2" gutterBottom>Rover Explorer 🚀</Typography>
        <Paper style={{ padding: '16px' }}>
          <Typography variant="subtitle2">Search (for photos taken on June 3rd, 2015)</Typography>
          <form style={{ display: 'flex', flexWrap: 'wrap', marginTop: '16px' }}>
            <TextField
              id="roverSelect"
              select
              label="Rover"
              value={this.state.rover || ''}
              onChange={this.handleRoverChange}
              style={{ width: '200px', marginRight: '16px' }}
            >
              {Object.keys(Rover).map(key => (
                <MenuItem key={Rover[key]} value={Rover[key]}>
                  {key}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="cameraSelect"
              select
              label="Camera"
              value={this.state.camera || ''}
              onChange={this.handleCameraChange}
              style={{ width: '200px', marginRight: '16px' }}
            >
              {Object.keys(Camera).map(key => (
                <MenuItem key={Camera[key]} value={Camera[key]}>
                  {key.match(/[A-Z][a-z]+/g).join(' ')}
                </MenuItem>
              ))}
            </TextField>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={this.handleSearch}
              disabled={!this.state.rover}
            >
              Search
            </Button>
          </form>
          <Divider style={{ marginTop: '16px', marginBottom: '16px' }} />
          <Typography variant="subtitle2">Results</Typography>
          {this.renderResults()}
        </Paper>
      </>
    );
  }
}

export default withRoverService(Explorer);