import data from "../data/factdata";
import { FETCH_START, FETCH_SUCCESS } from "./actions";


const initialState = {
    facts: data,
    loading: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
        return {
            ...state,
            loading: true,
            error: ''
        }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                facts: action.payload,
                error: ''
            }
        default:
            return(state);
    }
}

export default reducer;