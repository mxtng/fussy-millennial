import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./types";

import { showAlert } from "../actions/alert";

export const registerUser = ({ name, email, password }) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/register", {
      name,
      email,
      password,
    });

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.message);

    dispatch(showAlert("Please verify details"));

    dispatch({
      type: REGISTER_FAILURE,
    });
  }
};

export const loginUser = ({ email, password }) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/login", {
      email,
      password,
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.message);

    dispatch(showAlert("Invalid Credentials"));

    dispatch({
      type: LOGIN_FAILURE,
    });
  }
};

export const logoutUser = () => ({
  type: LOGOUT,
});
