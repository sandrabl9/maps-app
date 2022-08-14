import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token:
      'pk.eyJ1Ijoic2FuZHJhYmw5IiwiYSI6ImNsNnNjdHZoNDBzMGUzZnBiNHVhdnN3ZGMifQ.MvOw6RQSmsDjpp_Di-p_eA',
  },
});

export default searchApi;
