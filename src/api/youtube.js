import axios from 'axios';
const KEY = 'AIzaSyDv9oEXK7ZMQY9e0n0sEs4FGwYkkeC4jtA';

export default axios.create({
    baseURL: 'http://www.googleapis.com/youtube/v3/',
              
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    },
});
