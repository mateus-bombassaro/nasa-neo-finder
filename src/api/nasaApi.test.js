import axios from 'axios';
import { getNasaList, getNeo } from './nasaApi';

const getInitialDate = () => '2022-10-29';
const getFinalDate = () => '2022-10-30';

describe('nasaApi', () => {
  beforeEach(() => {
    axios.get = jest.fn().mockResolvedValue({ data: { near_earth_objects: 'dummy api data' } });
  });

  it('should call axios get with date props', () => {
    getNasaList(getInitialDate(), getFinalDate());

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get)
      .toHaveBeenCalledWith(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${getInitialDate()}&end_date=${getFinalDate()}&api_key=JktJWu2uck6IgZM5ZZz9Uvoaee3Gf0Q4i9XYuJuY`);
  });

  it('should retrieve api data', async () => {
    const result = await getNasaList(getInitialDate(), getFinalDate());

    expect(result).toEqual('dummy api data');
  })

  it('should retrieve neo 2465633 data', async () => {
    axios.get.mockResolvedValue({ data: { neo2465633: 'especific neo data' } });
    const result = await getNeo();

    expect(result).toEqual({ neo2465633: 'especific neo data' });
  })
});
