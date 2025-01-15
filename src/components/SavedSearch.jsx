import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const SaveSearch = ({ search, setSearch, handleSearchClick }) => {
  const [addSearch, setAddSearch] = useState(''); //state for add input

  useEffect(() => {
    // key is used to identify that data in local storage
    // so that data can persist across sessions
    const storedSearches = localStorage.getItem('storedSearches');
    if (storedSearches) {
      setSearch(JSON.parse(storedSearches));
    }
  }, []); //loads past searches each time component mounts

  useEffect(() => {
    //use the same key when handling the same dataset
    localStorage.setItem('storedSearches', JSON.stringify(search));
  }, [search]); //updates searches each time there is an update to search //handles both add and delete

  //   useEffect(() => {
  //     localStorage.setItem('key', 'value');
  //   }, []);

  const handleAddSearch = (e) => {
    e.preventDefault(); //prevent default behavior of submit button
    if (addSearch.trim() !== '') {
      const newSearch = { id: uuidv4(), text: addSearch };
      setSearch((prevSearch) => [...prevSearch, newSearch]); // call setter //spread prev state items into new array //append state for add input
      setAddSearch(''); //clear input field
    }
  };

  const handleDeleteSearch = (idToDelete) => {
    setSearch((prevSearch) =>
      prevSearch.filter((searches) => searches.id !== idToDelete)
    ); //call set search passing in previous state of searches//create new array from each item of previous state except for items matching delete search
  };
  console.log('Search:', search);

  return (
    <div className='savesearch'>
      <div className='list'>
        <div className='listtitle'>Saved Search</div>
        <ul>
          {search.map((item) => (
            <li key={item.id}>
              <span onClick={() => handleSearchClick(item.text)}>
                {item.text}
              </span>
              <button onClick={() => handleDeleteSearch(item.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
      <div className='searchbar'>
        <form onSubmit={handleAddSearch}>
          {/* <label htmlFor='savedSearch'></label> */}
          <input
            type='text'
            name='savedSearch'
            placeholder='Save Search'
            id='savedSearch'
            value={addSearch} // binds value of input field to addSearch state
            onChange={(e) => setAddSearch(e.target.value)} //onChange detects state change triggered by passed in event
            //e.target.value is value of the input field itself // setter is called to update state with this new value
            required
          />
          <input type='submit' value='Add' />
        </form>
      </div>
    </div>
  );
};

export default SaveSearch;
