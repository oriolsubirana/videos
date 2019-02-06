import axios from 'axios';

const KEY = 'AIzaSyD7e50cnlyta9luhg8wzj9dCf3ELEQDJCQ';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY
   }
});