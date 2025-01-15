// const baseUrl = 'https://mercari-japan.p.rapidapi.com/search'; //defines base url endpoint

// const testUrl =
//   'https://mercari-japan.p.rapidapi.com/search?query=Issey%20Miyake&sort=mostRecent'; //hard coded url used for testing

export async function fetchData(query) {
  const encodedQuery = encodeURIComponent(query);
  const url = `https://mercari-japan.p.rapidapi.com/search?query=${encodedQuery}&sort=mostRecent`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '3c2fa4b7fdmsh4a9e7cd27b9f640p158daejsnd6da5346d320',
      'x-rapidapi-host': 'mercari-japan.p.rapidapi.com',
    },
  }; //defines fetch request including headers necessary for authentication

  try {
    const response = await fetch(url, options); // sends request to given url with option object// awaits response
    if (!response.ok) {
      throw new Error(`HTTP Error! Status:${response.status}`);
    }
    const result = await response.json(); // processes saves json parsed response into result
    return result;
    console.log(result);
  } catch (error) {
    //catches any errors and logs them to the console
    console.error('Error fetcing data:', error);
    // return null
  }
}
