import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HeaderSearch = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/Product Search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="header-search hs-simple">
      <form action="#" method="get" onSubmit={handleSearch} className="input-wrapper">
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          name="search"
          required
        />

        <button className="btn btn-search" type="submit">
          <FontAwesomeIcon id="search-icon" className="shop-search-icon" icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default HeaderSearch;
