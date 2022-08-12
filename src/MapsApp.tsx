import React from 'react';
import { PlacesProvider } from './context';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <h1>Hola a todos</h1>
    </PlacesProvider>
  );
};
