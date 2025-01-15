import React from 'react';
import ItemDisplay from '../components/ItemDisplay';

const DisplayContainer = ({ data }) => {
  //   console.log('DisplayContainer data:', data);
  return (
    <div className='displayouter'>
      <ItemDisplay data={data} />
    </div>
  );
};

export default DisplayContainer;
