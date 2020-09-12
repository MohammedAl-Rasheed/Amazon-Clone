import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-actual-covid-19-56b76.cloudfunctions.net/api' // THE API URL
});

export default instance;
