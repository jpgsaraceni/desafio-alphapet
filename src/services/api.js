import axios from 'axios';
// lib to make XMLHttpRequests.

const api = axios.create({
    // creates an api to the json.server (for development only). In build the value of baseURL would be that of the server. process.env.REACT_APP_API_URL gets the url of the .env file in the root of the project.
    baseURL: process.env.REACT_APP_API_URL,
});

export default api;
