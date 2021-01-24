import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsappaldo.herokuapp.com/",
});

export default instance;
