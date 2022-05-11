import { useState, useContext } from 'react';
import { Popup } from 'react-map-gl';
import LocationsContext from '../context/LocationsContext';

const PopupCreator = ({ lon, lat, title, description }) => {
  const [showPopup, setShowPopup] = useState(true);
  const { locations, setLocations } = useContext(LocationsContext);

  return (
    <div>
      {showPopup &&
        locations &&
        locations.map((location, i) => (
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
        ))}
    </div>
  );
};

export default PopupCreator;
