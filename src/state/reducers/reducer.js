import { initialState } from "../index";
import * as actionsType from '../actions/action-types';

const getImageReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case actionsType.ASYNC_GET_IMAGE:
            newState.image.url = action.value;
            newState.image.error = action.error;
            newState.image.dislike = false;
            newState.image.like = false;
            break;

        case actionsType.ASYNC_LIKE_IMAGE:
            newState.totalLike = state.totalLike + 1;
            if (state.image.dislike === true) {
                newState.totalDislike = state.totalDislike - 1;
            }
            newState.image.like = true;
            newState.image.dislike = false;
            break;

        case actionsType.ASYNC_DISLIKE_IMAGE:
            newState.totalDislike = state.totalDislike + 1;
            if (state.image.like === true) {
                newState.totalLike = state.totalLike - 1;
            }
            newState.image.dislike = true;
            newState.image.like = false;
            break;

        case actionsType.ASYNC_FINISH_UNSPLASH_IMAGE:
            newState.userList.push({ userEmail: newState.currentUser, like: newState.totalLike, dislike: newState.totalDislike });
            newState.finish = true;
            break;

        case actionsType.ASYNC_SET_CURRENT_USER:
            newState.currentUser = action.data.email;
            break;

        case actionsType.ASYNC_RESET_ALL_STATE:
            newState.totalLike = 0;
            newState.totalDislike = 0;
            newState.finish = false;
            newState.image.url = "";
            newState.image.error = false;
            newState.image.like = false;
            newState.image.dislike = false;
            newState.currentUser = "";
            break;

        default:
            return newState;
    }
    return newState;
}

export default getImageReducer;