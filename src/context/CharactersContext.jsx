import { createContext, useMemo } from 'react';
import useInformation from '../hooks/useInformation';

export const CharactersContext = createContext(null);

export function CharactersProvider({ children }) {
  const { results, handleClick, info, page } = useInformation('character');

  const value = useMemo(() => {
    return { results, handleClick, info, page };
  }, [results, handleClick, info, page]);

  return <CharactersContext.Provider value={value}>{children}</CharactersContext.Provider>;
}
