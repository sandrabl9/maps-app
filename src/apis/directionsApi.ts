import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1Ijoic2FuZHJhYmw5IiwiYSI6ImNsNnNjdHZoNDBzMGUzZnBiNHVhdnN3ZGMifQ.MvOw6RQSmsDjpp_Di-p_eA',
  },
});

export default directionsApi;
