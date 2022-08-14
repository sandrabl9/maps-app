import React from 'react';
import { BtnMyLocation, MapView, SearchBar } from '../components';

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <SearchBar />
      <BtnMyLocation />
    </div>
  );
};
