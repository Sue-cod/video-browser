import axios from "axios";

const KEY = "AIzaSyDv9oEXK7ZMQY9e0n0sEs4FGwYkkeC4jtA";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

instance.interceptors.request.use((config) => {
  config.params = {
    key: KEY,
    part: "snippet",
    type: "video",
    maxResults: 5,
    ...config.params,
  };
  return config;
});

export default instance;