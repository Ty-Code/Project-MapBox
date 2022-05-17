import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectedLocationsContext from '../context/SelectedLocationsContext';
import NavBtnContext from '../context/NavBtnContext';
import LocationsContext from '../context/LocationsContext';
import 'material-icons/iconfont/material-icons.css';
import axios from 'axios';

const FavoriteCard = ({ location }) => {
  const navigate = useNavigate();
  const { setSelectedLocation } = useContext(SelectedLocationsContext);
  const { setSelectedNavBtn } = useContext(NavBtnContext);
  const { locations, setLocations } = useContext(LocationsContext);

  const handleSelection = (location) => {
    navigate(`/`);
    setSelectedLocation(location);
    setSelectedNavBtn('map');
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();

    try {
      axios.delete(`/locations/${id}`);
      setLocations(locations.filter((location) => location._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className="favorites--item" onClick={() => handleSelection(location)}>
      <div className="favorite">
        <span className="favorite--title">{location.title}</span>
        <span className="material-icons" onClick={(e) => handleDelete(e, location._id)}>
          delete_forever
        </span>
      </div>
    </li>
  );
};

export default FavoriteCard;
