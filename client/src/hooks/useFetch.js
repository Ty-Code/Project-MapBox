import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async (endpoint) => {
      try {
        const response = await axios.get(endpoint);
        setData(response.data);
      } catch (error) {
        setData(null);
        setIsError(error.message);
      }
      setIsLoading(false);
    };
    fetchData(endpoint);
  }, [endpoint]);
  return { data, setData, isLoading, isError };
};

export default useFetch;
