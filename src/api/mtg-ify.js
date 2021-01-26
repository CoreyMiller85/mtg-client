const axios = require("axios");
const URL =
  process.env.NODE_ENV === "production"
    ? "https://cjm-mtg-collection.herokuapp.com"
    : "http://localhost:3002";
const mtgifyURL = axios.create({
  baseURL: URL,
});

export default mtgifyURL;
