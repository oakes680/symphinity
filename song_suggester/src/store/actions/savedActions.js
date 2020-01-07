import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const SAVED_LOADING_START = "SAVED_LOADING_START";
export const SAVED_LOADING_SUCCESS = "SAVED_LOADING_SUCCESS";
export const SAVED_LOADING_FAILURE = "SAVED_LOADING_FAILURE";
export const getSaved = user => dispatch => {
    dispatch(SAVED_LOADING_START);
    axiosWithAuth().get(`\${user}`)
        .then(res => dispatch({type: SAVED_LOADING_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: SAVED_LOADING_FAILURE, payload: err}))
}