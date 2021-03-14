import React, { useState } from "react";

export default function Pagination({
  initialPageNumber = 1,
  loadMore,
  offset = 10,
  limit = 10,
}) {
  const [page, setPage] = useState(initialPageNumber);

  const loadNextPage = () => {
    loadMore(page * offset, limit);
    setPage(page + 1);
  };

  return (
    <div className="pagination">
      <button onClick={loadNextPage}>Load More</button>
    </div>
  );
}
