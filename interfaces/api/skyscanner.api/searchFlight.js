const axios = require('axios');

// set API endpoint and parameters
const url = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0';
const params = {
  'originPlace': 'SFO-sky',
  'destinationPlace': 'NYC-sky',
  'outboundDate': '2022-05-01',
  'inboundDate': '2022-05-08',
  'cabinClass': 'economy',
  'adults': 1
};

// set API headers (replace with your own API key)
const headers = {
  'X-RapidAPI-Key': 'YOUR_API_KEY_HERE'
};

// make API request and handle response
axios.get(url, {params,  headers})
  .then(response => {
    const data = response.data
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
