import { useState, useContext } from 'react';
import { Popup } from 'react-map-gl';
import LocationsContext from '../context/LocationsContext';
import SelectedLocationsContext from '../context/SelectedLocationsContext';
import NewPinContext from '../context/NewPinContext';
import axios from 'axios';

const PopupCreator = () => {
  const { locations, setLocations } = useContext(LocationsContext);
  const { selectedLocation, setSelectedLocation } = useContext(SelectedLocationsContext);
  const { newPin, setNewPin } = useContext(NewPinContext);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLocation = {
      title,
      description,
      lon: newPin.lon,
      lat: newPin.lat,
    };
    try {
      const res = await axios.post('/locations', newLocation);
      setLocations([...locations, res.data]);
      setNewPin(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    try {
      axios.delete(`/locations/${id}`);
      setLocations(locations.filter((location) => location._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {locations &&
        selectedLocation &&
        locations.map(
          (location) =>
            location._id === selectedLocation._id && (
              <Popup
                longitude={location.lon}
                latitude={location.lat}
                anchor="left"
                onClose={() => setSelectedLocation(null)}
                key={location._id}
              >
                <div className="popup--card">
                  <span className='popup--card-title'>{location.title}</span>
                  <span className='popup--card-desc'>{location.description}</span>
                  <button className="popup--btn" onClick={() => handleDelete(location._id)}>
                    Delete
                  </button>
                </div>
              </Popup>
            )
        )}
      {newPin && (
        <Popup
          longitude={newPin.lon}
          latitude={newPin.lat}
          anchor="left"
          onClose={() => setNewPin(null)}
          closeOnClick={false}
        >
          <div className="popup--card">
            <form className="popup--form" onSubmit={handleSubmit}>
              <label>Title</label>
              <input
                type="text"
                placeholder="Enter a title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Description</label>
              <textarea
                type="text"
                placeholder="Say something"
                onChange={(e) => setDescription(e.target.value)}
              />
              <button className="popup--btn" type="submit">
                Add Pin
              </button>
            </form>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default PopupCreator;
