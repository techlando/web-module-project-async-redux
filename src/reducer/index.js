import data from "../data/factdata";


const initialState = {
    facts: data,
    loading: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return(state);
    }
}

export default reducer;