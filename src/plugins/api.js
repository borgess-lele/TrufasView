import axios from "axios";
// const MY_IP = import.meta.env.VITE_MY_IP

const api = axios.create({
  // baseURL: `http://${MY_IP}:19003/api/`
  // baseURL: `http://191.52.55.56:19003/api/`
  // baseURL: 'http://127.0.0.1:19003/api/'
  baseURL: "http://0.0.0.0:19003/api/",
});

export default api;
