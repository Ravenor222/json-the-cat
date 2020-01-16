const request = require('request');
const args = process.argv.splice(2);


request((`https://api.thecatapi.com/v1/breeds/search?q=${args}`),(err, response, body) => {
    
  if(body == "[]") {
    return console.log("error, breed not found | error = ", err );
    }
  if(response.statusCode < 200 || response.statusCode > 203) {
        return console.log(response.statusCode);
    }    

    const data = JSON.parse(body);
    console.log(data[0]["description"])    
    
})