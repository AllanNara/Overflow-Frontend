import axios from "axios";
import { user, URL } from "../action-types/index.js";


export function createUser(loginWithAuth0) {
  return (dispatch) => {
    axios.post(`/users`, loginWithAuth0)
      .then(response => {
        dispatch({
          type: user.CREATE_USER,
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
};

export function getUsers() {
  return (dispatch) => {
    axios.get(`/users`)
      .then(response => {
        dispatch({
          type: user.GET_USERS,
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error)
      });
  }
};

export function getUsersByName(search) {
  return (dispatch) => {
    axios.get(`/users?fullname=${search}`)
      .then(response => {
        dispatch({
          type: user.GET_USERS_BY_NAME,
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
};

export function userDinamix(idUser) {
  return (dispatch) => {
    axios.get(`/users/${idUser}?dinamix=true`)
      .then(response => {
        dispatch({
          type: user.GET_USERS_BY_NAME,
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
};

export function getUserProfile(idUser) {
  return (dispatch) => {
    axios.get(`/users/${idUser}`)
      .then(response => {
        dispatch({
          type: user.GET_USER_PROFILE,
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
};

export function updateUserProfile(form, idUser) {
  // console.log('from:', form, 'user:', idUser)
  return (dispatch) => {
    axios.put(`/users/${idUser}`, form)
      .then(response => {
        dispatch({
          type: user.UPDATE_USER_PROFILE,
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
};

export function finishedPost(idPost, finishedPost, idUser) {

  console.log('id del post:', idPost, 'esta en:', finishedPost, 'el cual tiene un user id:', idUser)

  return (dispatch) => {
    axios.put(`/posts/${idPost}/${idUser}`, finishedPost)
      .then(response => {
        dispatch({
          type: user.FINISHED_POST,
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
};

export function setDinamix(payload) {
  return {
    type: "SET_DINAMIX",
    payload
  }
}


// '/:idPost', finishedPost
//'/:idPost', finishedPost;


