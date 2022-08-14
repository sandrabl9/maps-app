import React, { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const BtnMyLocation = () => {
  const { isMapReady, map } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const handleClick = () => {
    if (!isMapReady) throw new Error('El mapa no está listo');
    if (!userLocation) throw new Error('No hay ubicación del usuario');
    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };
  return (
    <button
      className='btn btn-dark'
      onClick={handleClick}
      style={{
        position: 'fixed',
        top: '30px',
        right: '20px',
        zIndex: 999,
      }}
    >
      Mi ubicación
    </button>
  );
};
