import { createContext, useMemo } from 'react';
import useInformation from '../hooks/useInformation';

export const LocationsContext = createContext(null);

export function LocationsProvider({ children }) {
  const { results, handleClick, info, page } = useInformation('location');

  const value = useMemo(() => {
    return { results, handleClick, info, page };
  }, [results, handleClick, info, page]);

  return <LocationsContext.Provider value={value}>{children}</LocationsContext.Provider>;
}
