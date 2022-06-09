import axios from "axios";
import { user, URL } from "../action-types/index.js";


export function createUser(loginWithAuth0) {
  return (dispatch) => {
    axios.post(`${URL}/users`, loginWithAuth0)
      .then(response => {dispatch({
        type: user.CREATE_USER,
        payload: response.data
      })})
      .catch(error => {
        console.log(error)
      })
  }
};

export function getUsers() {
  return (dispatch) => {
    axios.get(`${URL}/users`)
      .then(response => {dispatch({
        type: user.GET_USERS,
        payload: response.data
      })})
      .catch(error => {
        console.log(error)
      });
  }
};

export function getUsersByName(search) {
  return (dispatch) => {
    axios.get(`${URL}/users/${search}`)
      .then(response => {dispatch({
        type: user.GET_USERS_BY_NAME,
        payload: response.data
      })})
      .catch(error => {
        console.log(error)
      })
  }
};

export function getUserProfile(idUser) {
  return (dispatch) => {
    axios.get(`${URL}/users/${idUser}`)
      .then(response => {dispatch({
        type: user.GET_USER_PROFILE,
        payload: response.data
      })})
      .catch(error => {
        console.log(error)
      })
  }
};

export function updateUserProfile(form, idUser) {
  return (dispatch) => {
    axios.put(`${URL}/users/${idUser}`, form)
      .then(response => {dispatch({
        type: user.UPDATE_USER_PROFILE,
        payload: response.data
      })})
      .catch(error => {
        console.log(error)
      })
  }
};
