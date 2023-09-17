import { useEffect, useState } from 'react';
import useFetchFromApi from '../api/useFetchFromApi';

export default function useCharacter({ id }) {
  const { getCharacterInfo } = useFetchFromApi('character');

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getCharacterInfo(id);
      setCharacter(data);
    })();

    return () => {
      setCharacter(null);
    };
  }, [getCharacterInfo, id]);

  return { character };
}
