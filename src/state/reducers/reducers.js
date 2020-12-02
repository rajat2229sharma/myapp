import * as actions from "../actions/action-types";

const loadImageReducer = (state = { url: '' }, { type, fetchValue }) => {
    switch (type) {
        case actions.LOAD_IMAGE_TWO:
            console.log(fetchValue, 'rajat');
            return { url: fetchValue }

        default:
            return state;
    }
}

export default loadImageReducer;