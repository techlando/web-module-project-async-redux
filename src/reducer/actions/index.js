import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";



export const getFacts = (many) => {
    return ( dispatch => {
        dispatch({type: FETCH_START})
        axios.get(`https://catfact.ninja/facts?max_length=100&limit=${many}`)
            .then(res=> {
                dispatch({type: FETCH_SUCCESS, payload: res.data.data})
            })
            .catch(err => {
                console.log(err); 
            })
        })
    }

export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess = (facts) => {
    return({type: FETCH_SUCCESS, payload: facts})
}