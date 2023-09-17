import { useState } from 'react';

export default function usePaginator() {
  const [page, setPage] = useState(1);

  const handlePaginatorClick = (selectedPage, totalPages) => {
    if (typeof selectedPage === 'number') return setPage(selectedPage);
    if (selectedPage === '🡲' && page + 1 <= totalPages) return setPage((prev) => prev + 1);
    if (selectedPage === '🡰' && page - 1 > 0) return setPage((prev) => prev - 1);
    return false;
  };

  const resetPage = () => {
    setPage(1);
  };

  return { page, handlePaginatorClick, resetPage };
}
