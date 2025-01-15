import React from 'react';

const ItemDisplay = ({ data }) => {
  console.log('ItemDisplay:', data);
  return (
    <div className='itemdisplay'>
      {data.map((item) => {
        const { thumbnails, name, price, itemSize } = item;

        return (
          <div key={item.id} className='tilecontainer'>
            <div className='itemimage'>
              {thumbnails && thumbnails[0] && (
                <img src={thumbnails[0]} alt={`item-${item.id}`} />
              )}
              {name && (
                <p className='itemtitle'>
                  <a
                    href={`https://jp.mercari.com/item/${item.id}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {name}
                  </a>
                </p>
              )}
              {price && (
                <p className='itemprice'>$ {(price * 0.0065).toFixed(2)} </p> //convert price USD with hard coded exchange rate// display 2 decimal places
              )}
              {itemSize && itemSize.id && (
                <p className='itemsize'>size:{itemSize.id}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDisplay;
