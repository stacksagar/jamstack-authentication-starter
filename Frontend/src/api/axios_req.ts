import axios from "axios";

const BASE_URL = "http://localhost:1000/api/v1";

export const axios_req = axios.create({
  baseURL: BASE_URL,
});

export const axios_private = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
