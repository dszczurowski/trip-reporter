import axios, { AxiosResponse } from 'axios';
import { extractCountriesNames } from './transformData';

export default {
  getCountriesNames: (): Promise<AxiosResponse> =>
    axios.get(process.env.REACT_APP_COUNTRY_API, {
      transformResponse: data => extractCountriesNames(JSON.parse(data))
    })
}