import { createRoot } from 'react-dom/client'; //used to render the React application in DOM.
import React, { useState, useEffect } from 'react'; //imports entire react object plus hooks used for managing state and side effects in component
//import react and destructure Component from react library
import '../styles.css';
import MainContainer from '../containers/MainContainer.jsx';
import UtilityContainer from '../containers/UtilityContainer.jsx';
import { fetchData } from './Api.jsx';
// import SaveSearch from './SavedSearch.jsx';
// import ItemDisplay from './ItemDisplay.jsx';

function App() {
  //use state
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]); // storing saved queries

  const handleSearchClick = async (query) => {
    //asycn function assigned to HandleSearchclick// query argument represents the search term
    try {
      const results = await fetchData(query);
      setData(results);
    } catch (error) {
      setData([]); //clear results on error
    }
  };

  // useEffect(() => { // save to use later // for automatic rerender
  //   async function getData() {
  //     try {
  //       // console.log('Fetching Data');
  //       const result = await fetchData();
  //       // console.log(result);
  //       setData(result);
  //     } catch (error) {
  //       'Failed to Fetch Data:', error;
  //     }
  //   }
  //   getData();
  // }, []);

  //defining a new React component called App that inherits from the Component class provided by React
  return (
    //outer return is for App's render method

    <div className='toplevel'>
      <MainContainer
        data={data}
        search={search}
        setSearch={setSearch}
        handleSearchClick={handleSearchClick}
      />
      <UtilityContainer />
    </div>
  );
}

export default App;
