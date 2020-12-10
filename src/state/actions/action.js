import * as actionType from "./action-types";

export const getImageAction = () => {
    return {
        type: actionType.GET_IMAGE
    }
}

export const likeImageAction = () => {
    return {
        type: actionType.LIKE_IMAGE
    }
}

export const dislikeImageAction = () => {
    return {
        type: actionType.DISLIKE_IMAGE
    }
}

export const finishUnsplashImageAction = () => {
    return {
        type: actionType.FINISH_UNSPLASH_IMAGE
    }
}

export const resetAllStateAction = () => {
    return {
        type: actionType.RESET_ALL_STATE
    }
}

export const setCurrentUserAction = (email) => {
    return {
        type: actionType.SET_CURRENT_USER,
        email: email,

    }
}