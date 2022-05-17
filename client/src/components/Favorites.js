import { useContext } from 'react';
import LocationsContext from '../context/LocationsContext';
import FavoriteCard from './FavoriteCard';
import spinner from '../assets/spinner.gif';

const Favorites = () => {
  const { locations, isError, isLoading } = useContext(LocationsContext);

  return (
    <ul className="favorites--list">
      {isError ? (
        <span>BAD REQUEST!</span>
      ) : isLoading ? (
        <span>
          <img src={spinner} alt="spinner" />
        </span>
      ) : (
        locations &&
        locations.map((location, i) => <FavoriteCard location={location} key={i + 200} />)
      )}
    </ul>
  );
};

export default Favorites;
