import React, { ChangeEvent, useContext, useRef } from 'react';
import { PlacesContext } from '../context';

export const SearchBar = () => {
  const { searchPlacesByQuery } = useContext(PlacesContext);
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      // TODO: buscar o ejecutar consulta
      searchPlacesByQuery(event.target.value);
    }, 1000);
  };
  return (
    <div className='search-bar-container'>
      <input
        type='text'
        className='input-group search-bar-input'
        placeholder='Buscar lugar...'
        onChange={onQueryChange}
      />
    </div>
  );
};
