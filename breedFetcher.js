const request = require('request');
const breed = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
request(url, (error, response, body) => {
  const data = JSON.parse(body);
  if (error){
    console.log('Sorry, request failed - please provide correct information,', error);
  } else {
    if (data === undefined){
      console.log('Sorry, breed is not found in our database.Look somewhere else!');
    } else {
      console.log(data[0].description);
    }
  }
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log('data:', data[0].description);
  // console.log('typeof data:', typeof data);
  // console.log('typeof body:', typeof body);

});