import Camera from './Camera';

interface PhotoCamera {
  name: Camera;
  full_name: string;
}

interface Photo {
  id: number;
  sol: number;
  img_src: string;
  earth_date: string;
  camera: PhotoCamera;
}

interface PhotoResponse {
  photos: Photo[];
}

export default PhotoResponse;