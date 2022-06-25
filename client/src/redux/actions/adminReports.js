import axios from "axios";
import { admin, URL } from "../action-types/index.js";


export function getAllReports(idAdmin) {
    return (dispatch) => {
        axios.get(`/admin/reports`, {
            headers: {
                authorization: idAdmin
            }
        })
        .then(response => {dispatch({
            type: admin.GET_ALL_REPORTS,
            payload: response.data
        })})
        .catch(error => {
            console.log(error)
        })
    }
};

export function getDetailReport(idReport, idAdmin) {
    return (dispatch => {
        axios.get(`/admin/reports/${idReport}`, {
            headers: {
                authorization: idAdmin
            }
        })
        .then(response => {dispatch({
            type: admin.GET_DETAIL_REPORT,
            payload: response.data
        })})
        .catch(error => {
            console.log(error)
        })
    })
};

export function deleteReport(idReport, idAdmin) {
    return (dispatch => {
        axios.delete(`/admin/reports/${idReport}`, {
            headers: {
                authorization: idAdmin
            }
        })
        .then(response => {dispatch({
            type: admin.DELETE_REPORT,
            payload: response.data
        })})
        .catch(error => {
            console.log(error)
        })
    })
};

