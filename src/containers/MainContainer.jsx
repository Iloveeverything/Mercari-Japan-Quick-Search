import React from 'react';
import SaveBar from './SaveBar.jsx';
import DisplayContainer from './DisplayContainer.jsx';

const MainContainer = ({ data, search, setSearch, handleSearchClick }) => {
  // console.log('MainContainer data:', data);
  return (
    <div className='container'>
      <SaveBar
        data={data}
        search={search}
        setSearch={setSearch}
        handleSearchClick={handleSearchClick}
      />
      <DisplayContainer data={data} />
    </div>
  );
};

export default MainContainer;
