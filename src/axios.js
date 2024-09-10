import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "YOUR_API_KEY_HERE",
  },
});

export default instance;
