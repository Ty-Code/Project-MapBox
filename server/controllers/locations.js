import Location from '../models/Location-model.js';

export const createLocation = async (req, res) => {
  const newLocation = new Location(req.body);
  try {
    const savedLocation = await newLocation.save();
    res.status(200).json(savedLocation);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const deleteLocation = async (req, res) => {
  const { id } = req.params;
  try {
    const selectedLocation = await Location.findOneAndDelete({ _id: id });
    res.status(200).send({ msg: `Location with id ${id} is deleted!` });
    return selectedLocation;
  } catch (error) {
    res.status(500).json(error);
  }
};
