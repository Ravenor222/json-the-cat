const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request((`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`),(err,response,body) => {


    const data = JSON.parse(body);

    if (data.length === 0 ){
        callback(err, null);
    } else {
        callback(err, data[0]["description"]);

    }

  })

}


module.exports = { fetchBreedDescription };