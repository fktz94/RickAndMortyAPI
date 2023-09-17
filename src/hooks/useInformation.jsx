import { useEffect, useState } from 'react';
import useFetchFromApi from '../api/useFetchFromApi';
import usePaginator from './usePaginator';

export default function useInformation(selectedSection) {
  const [results, setResults] = useState(null);
  const [info, setInfo] = useState(null);

  const { handlePaginatorClick, page } = usePaginator();

  const { getInfo } = useFetchFromApi(selectedSection);

  const handleClick = (selectedPage) => {
    const { pages: totalPages } = info;
    handlePaginatorClick(selectedPage, totalPages);
  };

  useEffect(() => {
    (async () => {
      const data = await getInfo(page);
      setResults(data.results);
    })();

    return () => {
      setResults(null);
    };
  }, [getInfo, page]);

  useEffect(() => {
    (async () => {
      const data = await getInfo();
      setInfo(data.info);
    })();

    return () => {
      setInfo(null);
    };
  }, [getInfo]);

  return { results, handleClick, info, page };
}
