import { useContext } from 'react';
import Map from 'react-map-gl';
import Marker from './Marker.js';
import Popup from './Popup.js';
import SelectedLocationsContext from '../context/SelectedLocationsContext.js';
import NewPinContext from '../context/NewPinContext.js';
import spinner from '../assets/spinner.gif';
import LocationsContext from '../context/LocationsContext.js';

const Mapper = () => {
  const { setNewPin } = useContext(NewPinContext);
  const { selectedLocation } = useContext(SelectedLocationsContext);
  const { locations, isError, isLoading } = useContext(LocationsContext);

  const handleMapClick = (e) => {
    const { lng: lon, lat } = e.lngLat;
    setNewPin({
      lon,
      lat,
    });
  };

  return (
    <>
      {isError ? (
        <span className='preload'>BAD REQUEST!</span>
      ) : isLoading ? (
        <span className='preload'>
          <img src={spinner} alt="spinner" />
        </span>
      ) : (
        locations && (
          <Map
            initialViewState={{
              longitude: selectedLocation ? selectedLocation.lon : 5,
              latitude: selectedLocation ? selectedLocation.lat : 52,
              zoom: 6,
            }}
            onClick={(e) => handleMapClick(e)}
            style={{ width: `100vw`, height: `100vh` }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          >
            <Marker />
            <Popup />
          </Map>
        )
      )}
    </>
  );
};

export default Mapper;
