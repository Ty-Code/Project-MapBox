import Map from 'react-map-gl';
import Marker from './Marker.js';
import Popup from './Popup.js';

const Mapper = () => {


  return (
    <Map
      initialViewState={{
        longitude: 17,
        latitude: 46,
        zoom: 6,
      }}
      style={{ width: `100vw`, height: `100vh` }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    >
      <Marker />
      <Popup />
    </Map>
  );
};

export default Mapper;
