import { initialState } from "../index";
import * as actions from "../actions/action-types";

const loadImageReducer = (state= initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case actions.LOAD_IMAGE_TWO:
            console.log(action.value, 'rajat');
            newState.image.url = action.value;
            newState.image.dislike = false;
            newState.image.like = false;
            break;

        case actions.LIKE_IMAGE_TWO:
            newState.totalLike = state.totalLike + 1;
            if (state.image.dislike === true) {
                newState.totalDislike = state.totalDislike - 1;
            }
            newState.image.like = true;
            newState.image.dislike = false;
            break;

        case actions.DISLIKE_IMAGE_TWO:
            newState.totalDislike = state.totalDislike + 1;
            if (state.image.like === true) {
                newState.totalLike = state.totalLike - 1;
            }
            newState.image.dislike = true;
            newState.image.like = false;
            break;

        case actions.ASYNC_FINISH_UNSPLASH_IMAGE:
            newState.finish = true;
            break;

        case actions.ASYNC_RESET_ALL_STATE:
            newState.totalLike = 0;
            newState.totalDislike = 0;
            newState.finish = false;
            newState.image.url = "";
            newState.image.error = false;
            newState.image.like = false;
            newState.image.dislike = false;
            break;
            // return { url: value }

        // case actions.LIKE_IMAGE_TWO:
        //     return { url: value }

        // case actions.DISLIKE_IMAGE_TWO:
        //     return { url: value }

        default:
            return newState;
    }
    return newState;
}

export default loadImageReducer;