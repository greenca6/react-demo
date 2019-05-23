import Rover from '../model/Rover';
import Camera from '../model/Camera';
import PhotoResponse from '../model/PhotoResponse';

const API_KEY = 'ZOUCjdo9zqVfPD5Ts2MmrGuFTZVrdffGnPwJrgvN';
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers';

class RoverService {
    getPhotos(rover: Rover, camera: Camera, date: string): Promise<PhotoResponse> {
        const URI = `${BASE_URL}/${rover}/photos?${camera ? 'camera=' + camera : ''}&earth_date=${date}&api_key=${API_KEY}`;
        return fetch(URI).then(r => r.json());
    }
}

export default RoverService;
