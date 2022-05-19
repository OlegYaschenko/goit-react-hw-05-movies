import React from 'react';
import { useSearchParams } from 'react-router-dom';

export function SearchForm() {
  let [, setSearchParams] = useSearchParams();
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.search.value });
    e.target.reset();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
