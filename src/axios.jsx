import axios from "axios";

const instance = axios.create({
    basketURL: 'http://127.0.0.1:5001/e-commerce-website-aca89/us-central1/api'    //THE API (cloud function) URL
});

export default instance;