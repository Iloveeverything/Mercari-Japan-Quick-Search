import React from 'react';
// import SaveSearchUtility from '../components/SaveSearchUtility';
import ClassicSearch from '../components/ClassicSearchUtil';
import SortUtility from '../components/SortUtility';

const UtilityContainer = () => {
  return (
    <div className='utilitycontainer'>
      <ClassicSearch />
      <SortUtility />
    </div>
  );
};

export default UtilityContainer;
