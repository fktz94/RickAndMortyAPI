import { createContext, useMemo } from 'react';
import useInformation from '../hooks/useInformation';

export const EpisodesContext = createContext(null);

export function EpisodesProvider({ children }) {
  const { results, handleClick, info, page } = useInformation('episode');

  const value = useMemo(() => {
    return { results, handleClick, info, page };
  }, [results, handleClick, info, page]);

  return <EpisodesContext.Provider value={value}>{children}</EpisodesContext.Provider>;
}
