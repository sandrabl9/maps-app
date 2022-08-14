import { createContext } from 'react';
import { Feature } from '../../interface/places';

export interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];

  //Methods
  searchPlacesByQuery: (query: string) => Promise<Feature[]>;
}

export const PlacesContext = createContext({} as PlacesContextProps);
