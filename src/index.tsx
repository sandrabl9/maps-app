import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2FuZHJhYmw5IiwiYSI6ImNsNnNjdHZoNDBzMGUzZnBiNHVhdnN3ZGMifQ.MvOw6RQSmsDjpp_Di-p_eA';

if (!navigator.geolocation) {
  alert('Tu navegador no tiene opción de Geolocalización');
  throw new Error(`Tu navegador no tiene opción de Geolocalización`);
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
