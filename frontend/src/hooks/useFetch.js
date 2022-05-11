import { useState, useEffect, useContext } from 'react';

const useFetch = (endpoint) => {
  const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async (endpoint) => {
      try {
        const res = await fetch(endpoint);
        if (!res.ok) {
          throw new Error('HTTP Error!');
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(endpoint);
  }, [endpoint]);
  return { data };
};

export default useFetch;
