import { useEffect, useState } from 'react';
import useFetchFromApi from '../api/useFetchFromApi';
import usePaginator from './usePaginator';

export default function useFilteredInformation(selectedSection) {
  const [results, setResults] = useState(null);
  const [info, setInfo] = useState(null);
  const [searchFilters, setSearchFilters] = useState(null);

  const { handlePaginatorClick, page, resetPage } = usePaginator();

  const { getFilteredInfo } = useFetchFromApi(selectedSection);

  const handleClick = (selectedPage) => {
    const { pages: totalPages } = info;
    handlePaginatorClick(selectedPage, totalPages);
  };

  const handleSearchFilters = (data) => {
    resetPage();
    setSearchFilters(data);
  };
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      if (!searchFilters) return;
      try {
        const data = await getFilteredInfo(searchFilters, page);
        setResults(data.results);
      } catch (e) {
        setError('not found');
      }
    })();

    return () => {
      setResults(null);
    };
  }, [getFilteredInfo, page, searchFilters]);

  useEffect(() => {
    (async () => {
      if (!searchFilters) return;
      try {
        const data = await getFilteredInfo(searchFilters);
        setInfo(data.info);
      } catch (e) {
        setError('not found');
      }
    })();
    return () => {
      setInfo(null);
      setError(null);
    };
  }, [getFilteredInfo, searchFilters]);

  return { results, handleClick, error, info, page, handleSearchFilters };
}
