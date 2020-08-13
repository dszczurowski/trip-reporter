import { useEffect, useState } from "react";
import api from "../utils/api";

const useFetchCountries = () => {
  const [ countries, setCountries ] = useState([]);

  useEffect( () => {
    (async () => {
      try {
        const response = await api.getCountriesNames();
        setCountries(response.data);
      } catch(e) {
        console.error(e.message);
      }
    })();
  }, []);

  return countries;
};

export default useFetchCountries;