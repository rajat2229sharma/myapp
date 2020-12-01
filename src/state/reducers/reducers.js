import * as actions from "../actions/action-types";

const loadImageReducer = (state = { url: '' }, { type, payload }) => {
    switch (type) {
        case actions.LOAD_IMAGE:
            return { url: payload }

        default:
            return state;
    }
}

export default loadImageReducer;