import { createContext, useMemo } from 'react';
import useFilteredInformation from '../hooks/useFilteredInformation';

export const FilteredCharactersContext = createContext(null);

export function FilteredCharactersProvider({ children }) {
  const { results, handleClick, info, error, page, handleSearchFilters } =
    useFilteredInformation('character');

  const value = useMemo(() => {
    return { results, handleClick, info, error, page, handleSearchFilters };
  }, [results, handleClick, info, error, page, handleSearchFilters]);

  return (
    <FilteredCharactersContext.Provider value={value}>
      {children}
    </FilteredCharactersContext.Provider>
  );
}
