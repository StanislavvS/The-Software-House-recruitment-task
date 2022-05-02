import axios, { AxiosRequestConfig } from "axios";
import MockAdapter from "axios-mock-adapter";

const jwt = localStorage.getItem("jwt");
const user = localStorage.getItem("user");

const AXIOS_CONFIG = {
  baseURL: "https://join-tsh-api-staging.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
};

export const basicInstance = axios.create(AXIOS_CONFIG);

basicInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (user) {
    if (config.headers === undefined) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${jwt}`;
  }

  return config;
});

export default basicInstance;

export const apiCall = basicInstance;

export const mock = new MockAdapter(apiCall, { delayResponse: 500 });

mock.onAny().passThrough();
