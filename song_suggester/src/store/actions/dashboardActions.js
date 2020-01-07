import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from 'axios';

export const DASHBOARD_LOADING_START = "DASHBOARD_LOADING_START";
export const DASHBOARD_LOADING_SUCCESS = "DASHBOARD_LOADING_SUCCESS";
export const DASHBOARD_LOADING_FAILURE = "DASHBOARD_LOADING_FAILURE";
export const getDashboard = songid => dispatch => {
    dispatch(DASHBOARD_LOADING_START);
    axiosWithAuth().get(`\${songid}`)
        .then(res => dispatch({ type: DASHBOARD_LOADING_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DASHBOARD_LOADING_FAILURE, payload: err }))
}

export const LOGIN_LOADING_START = "LOGIN_LOADING_START";
export const LOGIN_LOADING_SUCCESS = "LOGIN_LOADING_SUCCESS";
export const LOGIN_LOADING_FAILURE = "LOGIN_LOADING_FAILURE";
export const login = creds => dispatch => {
    dispatch({ type: LOGIN_LOADING_START });
    axios.post(`https://spotify-song-suggester.herokuapp.com/login`, creds)
        .then(res => /*dispatch({type: DASHBOARD_LOADING_SUCCESS, payload: res.data}*/ console.log(res.data))
        .catch(err => dispatch({ type: DASHBOARD_LOADING_FAILURE, payload: err }))
}

export const REGISTER_LOADING_START = "REGISTER_LOADING_START";
export const REGISTER_LOADING_SUCCESS = "REGISTER_LOADING_SUCCESS";
export const REGISTER_LOADING_FAILURE = "REGISTER_LOADING_FAILURE";
export const register = creds => dispatch => {
    dispatch({ type: LOGIN_LOADING_START });
    axios.post(`https://spotify-song-suggester.herokuapp.com/login`, `grant_type=password&username=${creds.username}&password=${creds.password}`, {
        headers: {
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(res => /*dispatch({type: REGISTER_LOADING_SUCCESS, payload: res.data}*/ console.log(res.data))
    .catch(err => dispatch({ type: REGISTER_LOADING_FAILURE, payload: err }))
}