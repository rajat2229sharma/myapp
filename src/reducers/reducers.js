const iState = {
    name: "ramesh",
    wishes: ['eat', 'code']
}

const Reducer = (state= iState, action) => {
    if (action.type ==='CHANGE_NAME') {

        return {
            ...state,
            name: action.payload
        }
    }
    return state;
}

export default Reducer;