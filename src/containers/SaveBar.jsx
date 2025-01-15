import React from 'react';
import SaveSearch from '../components/SavedSearch';
import FavoriteItems from '../components/FavoriteItems';

const SaveBar = ({ data, search, setSearch, handleSearchClick }) => {
  return (
    <div className='savebox'>
      <SaveSearch
        data={data}
        search={search}
        setSearch={setSearch}
        handleSearchClick={handleSearchClick}
      />
      <FavoriteItems />
    </div>
  );
};

export default SaveBar;
