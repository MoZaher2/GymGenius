import axios from "axios";
const instance = axios.create({
  baseURL: 'https://b7ee-197-59-2-225.ngrok-free.app/api',
});
export default instance;
