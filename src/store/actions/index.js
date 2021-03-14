import axios from "axios";
import { SET_USER_PROFILE, SET_GENRES, SET_USERS, SET_TOKEN } from "../types";

// Action creators

export function getUsers({ limit = 10, offset = 0 } = {}) {
  let params = new URLSearchParams({ limit, offset });

  params.set("limit", limit);
  params.set("offset", offset);

  const url = "https://jsonplaceholder.typicode.com/users?" + params.toString();

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

export function getGenres({ limit = 10, offset = 0 } = {}) {
  let params = new URLSearchParams({ limit, offset });

  params.set("limit", limit);
  params.set("offset", offset);

  const url =
    "https://api.spotify.com/v1/browse/categories?" + params.toString();

  return axios
    .get(url)
    .then((res) => {
      return {
        type: SET_GENRES,
        payload: res.data?.categories?.items || false,
      };
    })
    .catch((err) => {
      return { type: SET_GENRES, payload: false };
    });
}

export function setTokenAction(token) {
  return { type: SET_TOKEN, payload: token };
}
