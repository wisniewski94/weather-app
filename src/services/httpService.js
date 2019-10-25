import axios from "axios";
import logger from "./logService";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.params = {};
axios.defaults.params["APPID"] = process.env.REACT_APP_API_KEY;
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    logger.log(error);
    //here goes some logging service for logging unexpected errors ex.: Raven
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
