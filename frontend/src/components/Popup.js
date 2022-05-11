import { useState, useContext } from 'react';
import { Popup } from 'react-map-gl';
import LocationsContext from '../context/LocationsContext';
import SelectedLocationsContext from '../context/SelectedLocationsContext';

const PopupCreator = () => {
  const { locations, setLocations } = useContext(LocationsContext);
  const { selectedLocation, setSelectedLocation } = useContext(SelectedLocationsContext);
  console.log(selectedLocation);
  console.log(locations);

  return (
    <div>
      {locations &&
        locations.map(
          (location) =>
            location._id === selectedLocation && (
              <Popup
                longitude={location.lon}
                latitude={location.lat}
                anchor="left"
                onClose={() => setSelectedLocation(null)}
                key={location._id}
              >
                <div className="popup-card">
                  title: {location.title}
                  description: {location.description}
                </div>
              </Popup>
            )
        )}
    </div>
  );
};

export default PopupCreator;
