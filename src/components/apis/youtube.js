import axios from "axios";
const KEY = "AIzaSyAdy7JWmXiNHKUvJDEN8iopR46_vNBrZ6U";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 25,
        key: KEY
    } // q will be passed in upon call
});

