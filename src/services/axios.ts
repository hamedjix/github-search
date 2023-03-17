import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const API_URL = "https://api.github.com";
const token = "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";
const Axios = axios.create({
  baseURL: API_URL,
});
Axios.interceptors.request.use(
  function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
Axios.interceptors.response.use(function (res: AxiosResponse) {
  return res.data;
});

export default Axios;
