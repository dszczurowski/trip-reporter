import axios, { AxiosResponse } from 'axios';
import { extractCountriesNames } from './transformData';

export default {
  getCountriesNames: (): Promise<AxiosResponse> =>
    axios.get('https://restcountries.eu/rest/v2/all', {
      transformResponse: data => extractCountriesNames(JSON.parse(data))
    })
}