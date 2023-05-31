import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import { SyntheticEvent } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderSearch = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch2 = (e: any) => {
    setSearchTerm(e.target.value);
  };

  function onSubmitSearchForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push({
      pathname: '/Product Search',
      query: { search: searchTerm },
    });
  }
  return (
    <div className="header-search hs-simple">
      <form action="#" method="get" onSubmit={onSubmitSearchForm} className="input-wrapper">
        <input
          type="text"
          className="form-control"
          name="search"
          autoComplete="off"
          value={searchTerm}
          onChange={handleSearch2}
          placeholder="Search..."
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
