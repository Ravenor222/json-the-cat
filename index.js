const {fetchBreedDescription} = require('./breedFetcher');
const breedName = process.argv.splice(2);

fetchBreedDescription(breedName, (error, desc) => {
    console.log(error);
  if (error) {
    console.log("error fetch details: ", error);
  } else {
    console.log(desc);
  }
});


