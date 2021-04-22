import axios from 'axios';

const dbUrl = 'https://official-joke-api.appspot.com';

const getJoke = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/random_joke`)
    .then((response) => resolve((response.data)))
    .catch((error) => reject(error));
});

export default getJoke;
