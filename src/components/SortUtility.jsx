import React, { useState } from 'react';

const SortUtility = () => {
  return (
    <div className='sortutility'>
      <label htmlFor='sortresults'>Sort Results: </label>

      <select name='sortresults' id='sortresults'>
        <option value='mostRecent'>mostRecent</option>
        <option value='priceLowToHigh'>priceLowToHigh</option>
        <option value='priceHighToLow'>priceHighToLow</option>
        <option value='relevance'>relevance</option>
      </select>
    </div>
  );
};

export default SortUtility;
