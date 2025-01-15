import React from 'react';

const ClassicSearch = () => {
  return (
    <div className='classicsearch'>
      <label htmlFor='classicsearch'></label>
      <input
        type='text'
        name='classicsearch'
        placeholder='Basic Search'
        id='classicSearch'
        required
      />

      <input type='submit' value='Search' />
    </div>
  );
};

export default ClassicSearch;
