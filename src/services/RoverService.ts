import Rover from '../enums/Rovers';
import Camera from '../enums/Camera';

const API_KEY = 'DEMO_KEY';
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers';

class RoverService {
    getPhotos(rover: Rover, camera: Camera, date: string) {
        const URI = `${BASE_URL}/${rover}/photos?camera=${camera}&earth_date=${date}&api_key=${API_KEY}`;
        return fetch(URI).then(r => r.json());
    }
}

export default RoverService;
