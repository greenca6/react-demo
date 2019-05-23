import moment from 'moment';
import Rover from '../model/Rover';
import Camera from '../model/Camera';
import PhotoResponse from '../model/PhotoResponse';

const API_KEY = 'ZOUCjdo9zqVfPD5Ts2MmrGuFTZVrdffGnPwJrgvN';
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers';

class RoverService {
    getPhotos(rover: Rover, camera: Camera, date: string): Promise<PhotoResponse> {
        let requestUrl = `${BASE_URL}/${rover}/photos?api_key=${API_KEY}`;

        if (camera !== Camera.Any && camera !== null) {
            requestUrl += `&camera=${camera}`;
        }

        if (date && moment(date).isValid()) {
            requestUrl += `&earth_date=${date}`;
        }

        return fetch(requestUrl).then(r => r.json());
    }
}

export default RoverService;
