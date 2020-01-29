const initialState ={
    matches: [],
    isFetching: false,
    error: ''
}

const reducer=(state=initialState, action) =>{
    switch(action.type){
    case "initial":
        return{
            ...state,
            isFetching: true
        }
    case "Success":
        return {
            ...state,
            matches: action.payload,
            isFetching: false,
            error: ''
        }
    case "Failure":
        return {
            ...state,
            isFetching: false,
            error: action.payload
        }
    default:
        return state
}
}

export default reducer;