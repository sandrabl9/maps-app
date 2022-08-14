import React, { useReducer } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl';
import { mapReducer } from './mapReduder';
import { MapContext } from './MapContext';

export interface MapState {
  isMapReady: boolean;
  map?: Map;
}
const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  const setMap = (map: Map) => {
    const myLocationPopup = new Popup().setHTML(`<h4>Aquí estoy</h4>
    <p>En algún lugar lugar</p>`);
    new Marker({
      color: '#FFC300',
    })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map);
    dispatch({ type: 'setMap', payload: map });
  };
  return (
    <MapContext.Provider
      value={{
        ...state,
        //Methods
        setMap,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
