import { useContext } from 'react';
import { Marker } from 'react-map-gl';
import pinIcon from '../assets/map-pin.png';
import LocationsContext from '../context/LocationsContext';
import SelectedLocationsContext from '../context/SelectedLocationsContext';

const MarkerCreator = () => {
  const { locations } = useContext(LocationsContext);
  const { setSelectedLocation } = useContext(SelectedLocationsContext);

  const handleMarkerClick = (e, location) => {
    e.originalEvent.stopPropagation();
    setSelectedLocation(location);
    console.log(location);
  };

  return (
    <>
      {locations &&
        locations.map((location, i) => (
          <Marker
            longitude={location.lon}
            latitude={location.lat}
            anchor="bottom"
            onClick={(e) => handleMarkerClick(e, location)}
            key={i + 100}
          >
            <img
              className="marker--img"
              src={pinIcon}
              style={{ width: `1.8vw` }}
              alt="map_pin_icon"
            />
          </Marker>
        ))}
    </>
  );
};

export default MarkerCreator;
