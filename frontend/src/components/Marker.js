import { useContext } from 'react';
import { Marker } from 'react-map-gl';
import pinIcon from '../assets/map-pin.png';
import LocationsContext from '../context/LocationsContext';

const MarkerCreator = () => {
  const { locations, setLocations } = useContext(LocationsContext);
  return (
    <>
      {locations &&
        locations.map((location, i) => (
          <Marker longitude={location.lon} latitude={location.lat} anchor="bottom" key={i}>
            <img src={pinIcon} style={{ width: `3vw` }} alt="map_pin_icon" />
          </Marker>
        ))}
    </>
  );
};

export default MarkerCreator;
