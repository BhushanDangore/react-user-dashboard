import { SET_USER_PROFILE, SET_GENRES, SET_USERS, SET_TOKEN, SET_USER } from "../types";
import {setToken} from '../../helper/auth'
// Reducer
export default function storeReducer(state, action) {
  switch (action.type) {
    case SET_USER: {
      let newState = { ...state };
      newState.profile = action.payload
        ? action.payload
        : false;

      return newState;
    }

    case SET_USERS: {
      let newState = { ...state };
      newState.users = action.payload
        ? action.payload.reduce((acc, val) => {
            acc[val.id] = val;
            return acc;
          }, {})
        : false;

      newState.NewReleases = {
        ...state.users,
        ...newState.users,
      };

      console.log(newState);
      return newState;
    }

    case SET_USER_PROFILE: {
      let newState = { ...state };
      newState.profile = action.payload ? action.payload : false;

      return newState;
    }

    case SET_GENRES: {
      let newState = { ...state };
      newState.Genres = action.payload
        ? action.payload.reduce((acc, val) => {
            acc[val.id] = {
              name: val.name,
              image: val.icons[0].url,
            };
            return acc;
          }, {})
        : false;

      newState.Genres = {
        ...state.Genres,
        ...newState.Genres,
      };

      return newState;
    }

    case SET_TOKEN: {
      setToken()
      let newState = { ...state };
      newState.token = action.payload;
      return newState;
    }

    default:
      console.log(action);
      console.error(new Error("Invalid Action", action));
      return state;
  }
}
