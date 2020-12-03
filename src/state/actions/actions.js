import * as actions from "./action-types";

export const loadImageAction = (value) => ({
    type: actions.LOAD_IMAGE,
    payload: value
})

export const likeAction = () => ({
    type: actions.LIKE_IMAGE,
})

export const dislikeAction = () => ({
    type: actions.DISLIKE_IMAGE,
})

// export const handleRandomImage = (props) => {
//     fetch('https://source.unsplash.com/random/300x300')
//         .then(data => props.loadImage(data.url))
//     // .catch(err => {
//     //     // setError(true);
//     //     props.loadImage('');
//     // })
//     // console.log(data.url, 'rajat');
// }
