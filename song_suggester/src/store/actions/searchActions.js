import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const SEARCH_LOADING_START = "SEARCH_LOADING_START";
export const SEARCH_LOADING_SUCCESS = "SEARCH_LOADING_SUCCESS";
export const SEARCH_LOADING_FAILURE = "SEARCH_LOADING_FAILURE";
export const getSearch = term => dispatch => {
    dispatch(SEARCH_LOADING_START);
    axiosWithAuth().get(`\${songid}`)
        .then(res => dispatch({type: SEARCH_LOADING_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: SEARCH_LOADING_FAILURE, payload: err}))
}