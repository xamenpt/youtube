import axios from "axios";

const KEY = "AIzaSyA6ZKsmA6eK4Y5ckRyZgjDuyClv7IRwQD0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
