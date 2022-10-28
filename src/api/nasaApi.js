import axios from 'axios';

function getApiKey() {
  return 'JktJWu2uck6IgZM5ZZz9Uvoaee3Gf0Q4i9XYuJuY';
}

export async function getNasaList(startDate, endDate) {
  return axios
    .get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${getApiKey()}`)
    .then(({ data }) => data.near_earth_objects);
}
