import axios from 'axios';
import {API_URL} from '../config/api';

const aInstance = axios.create({
  baseURL: API_URL,
  headers: {'content-type': 'application/json'},
});

export const getCharacters = async () => {
  const url = '/characters';
  
  console.log({KK: aInstance.get(url)})
  const {data: resData} = await aInstance.get(url);
  console.log({resData: resData})
  return resData;
};


export const getHousesChars = async houseName => {
    const url = `/characters/house/${houseName}`
    const {data: resData} = await aInstance.get(url)
    return resData


}