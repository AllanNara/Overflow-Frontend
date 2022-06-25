import axios from "axios";
import { module, URL } from "../action-types/index.js";


export function getModules() {
  return (dispatch) => {
    axios.get(`/modules`)
      .then(response => {dispatch({
        type: module.GET_MODULES,
        payload: response.data
      })})
  }
};
