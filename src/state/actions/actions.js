import * as actions from "./action-types";

export const loadImageAction = (value) => ({
    type: actions.LOAD_IMAGE,
    payload: value
})