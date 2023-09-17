import { useCallback } from 'react';

export default function useFetchFromApi(selectedSection) {
  const URL = 'https://rickandmortyapi.com/api/';

  const getInfo = useCallback(
    async (page = 1) => {
      const data = await fetch(`${URL}${selectedSection}?page=${page}`);
      const json = await data.json();
      return json;
    },
    [selectedSection]
  );

  const getCharacterInfo = useCallback(
    async (id) => {
      const data = await fetch(`${URL}${selectedSection}/${id}`);
      const json = await data.json();
      return json;
    },
    [selectedSection]
  );

  const getFilteredInfo = useCallback(
    async (filters = undefined, page = 1) => {
      try {
        const data = await fetch(`${URL}${selectedSection}/?page=${page}&${filters}`);
        if (!data.ok) throw new Error('notfound');
        const json = await data.json();
        return json;
      } catch (e) {
        throw new Error(e);
      }
    },
    [selectedSection]
  );

  return { getInfo, getCharacterInfo, getFilteredInfo };
}
