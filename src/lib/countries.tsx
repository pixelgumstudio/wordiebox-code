// pages/api/countries.js
import axios from 'axios';

    export const continents = [
      "Africa", "Asia", "Europe", "North America", "South America", "Australia & Oceania"
    ];



export async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) {
  const API_KEY = process.env.COUNTRY_STATE_CITY_API_KEY;
  const BASE_URL = 'https://api.countrystatecity.in/v1';

  try {
    const response = await axios.get(`${BASE_URL}/countries`, {
      headers: {
        'X-CSCAPI-KEY': API_KEY
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
}