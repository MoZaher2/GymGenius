import axios from "axios";
const instance = axios.create({
  baseURL: 'http://localhost:5142/api',
});
export default instance;
