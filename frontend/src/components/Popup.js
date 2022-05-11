import { useState, useContext } from 'react';
import { Popup } from 'react-map-gl';
import LocationsContext from '../context/LocationsContext';
import SelectedLocationsContext from '../context/SelectedLocationsContext';

const PopupCreator = () => {
  const [showPopup, setShowPopup] = useState(true);
  const { locations, setLocations } = useContext(LocationsContext);
  const { selectedLocation, setSelectedLocation } = useContext(SelectedLocationsContext);
  console.log(selectedLocation);
  console.log(locations);
  
  return (
    <div>
      {showPopup &&
        locations &&
        locations.map(
          (location, i) =>
            location._id === selectedLocation && (
              <Popup
                longitude={location.lon}
                latitude={location.lat}
                anchor="left"
                onClose={() => setShowPopup(false)}
                key={i}
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
