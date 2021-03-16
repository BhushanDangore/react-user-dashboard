import axios from "axios";
import { setToken } from "../../helper/auth";
import {
  SET_USER_PROFILE,
  SET_GENRES,
  SET_USERS,
  SET_TOKEN,
  SET_USER,
} from "../types";

// Action creators

export function loginUser({ username, password }) {
  const url = "http://localhost:4000/users/authenticate";

  return axios
    .post(url, { username, password })
    .then((res) => {
      if(!res.data?.token) throw new Error("Login failed");

      setToken(res.data.token)
      return {
        type: SET_USER,
        payload: res.data || false,
      };
      
    })
    .catch((err) => {
      return { type: SET_USER, payload: false };
    });
}

export function getProfile({ limit = 10, offset = 0 } = {}) {
  const url = "https://jsonplaceholder.typicode.com/users";

  return axios
    .get(url)
    .then((res) => {
      return {
        type: SET_USER_PROFILE,
        payload: res.data?.[0] || false,
      };
    })
    .catch((err) => {
      return { type: SET_USERS, payload: false };
    });
}

export function getUsers({ limit = 10, offset = 0 } = {}) {
  let params = new URLSearchParams({ limit, offset });

  params.set("limit", limit);
  params.set("offset", offset);

  const url = "http://localhost:4000/users"

  return axios
    .get(url)
    .then((res) => {
      return {
        type: SET_USERS,
        payload: res.data || false,
      };
    })
    .catch((err) => {
      return { type: SET_USERS, payload: false };
    });
}

export function setTokenAction(token) {
  return { type: SET_TOKEN, payload: token };
}
