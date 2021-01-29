import axios from 'axios';

const KEY = 'AIzaSyB7xFnlbTIN2438QUHAuUBhGBpMCM1tysQ';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults : '10',
        key: KEY,
    }
});