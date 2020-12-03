import React from 'react'
import { connect } from "react-redux";
import { dislikeAction, likeAction, loadImageAction } from '../../state/actions/actions';
const Image = (props) => {
    // console.log(props, 'props');
    return (
        <div>
            { props.url === '' &&
                <button onClick={() => props.loadImage()}>
                    Start
                </button>
            }
            {
                props.url !== '' &&
                <div>
                    <div>
                        <img src={props.url} alt="Unsplash" />
                    </div>
                    <button onClick={() => props.loadImage()}>
                        Next
                    </button>
                    <br />
                    <br />
                    <br />
                    <button onClick={() => props.likeImage()}>
                        {props.totalLike}  LIKE
                    </button>
                    <br />
                    <br />
                    <br />
                    <button onClick={() => props.dislikeImage()}>
                        {props.totalDislike}  DISLIKE
                    </button>
                </div>
            }
        </div>
    )
};

const MapStateToProps = (state) => {
    console.log(state, 'state');
    return {
        url: state.image.url,
        like: state.image.like,
        dislike: state.image.dislike,
        totalLike: state.totalLike,
        totalDislike: state.totalDislike,
    };
}

const MapDispatchToProps = (dispatch) => {
    return {
        loadImage: () => dispatch(loadImageAction()),
        likeImage: () => dispatch(likeAction()),
        dislikeImage: () => dispatch(dislikeAction()),
    }
};

export default connect(MapStateToProps, MapDispatchToProps)(Image);