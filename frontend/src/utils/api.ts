import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { StatusCodes } from "http-status-codes";
import MockAdapter from "axios-mock-adapter";

const AXIOS_CONFIG = {
  baseURL: "https://join-tsh-api-staging.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
};

export const basicInstance = axios.create(AXIOS_CONFIG);

export default basicInstance;

export const apiCall = basicInstance;

export const mock = new MockAdapter(apiCall, { delayResponse: 500 });

mock.onAny().passThrough();
