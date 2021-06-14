import axios from "axios";

const qs = require('qs')

const TIMEOUT = 5000;
const devBaseURL = '/api'
const baseURL = devBaseURL

const Http = axios.create({
  timeout: TIMEOUT,
  baseURL: baseURL
});

Http.interceptors.request.use((config) => {
      if (config.method === 'post') {
        config.data = qs.stringify(config.params)
        config.params = {}
      }
      return config;
    },
    (err) => {
      return err;
    }
);

Http.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (err) => {
      if (err & err.message) {
        switch (err.response.status) {
          case 400:
            err.message = "请求错误";
            break;
          case 401:
            err.message = "未授权访问";
            break;
          default:
            break;
        }
      }
      return err
    }
);

export default Http
