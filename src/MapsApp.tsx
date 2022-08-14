import React from 'react';
import { MapProvider, PlacesProvider } from './context';
import { HomeScreen } from './screens';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};
