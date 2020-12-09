import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { dislikeAction, likeAction, loadImageAction, finishUnsplashImageAction } from '../../state/actions/actions';
const Image = (props) => {
    // console.log(props, 'props');
    return (
        <div data-testid="main-image">
            { props.url === '' &&
                <button onClick={() => props.loadImage()}>
                    Start
                </button>
            }
            {
                props.url !== '' && props.finish === false &&
                <div>
                    <div>
                        <img src={props.url} alt="Unsplash" />
                    </div>
                    <button onClick={() => props.loadImage()}>
                        Next
                    </button>
                    <Link to="/result">
                        <button data-testid="finish-button" onClick={() => props.finishUnsplashImage()}>Finish</button>
                    </Link>
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
        finish: state.finish,
        totalLike: state.totalLike,
        totalDislike: state.totalDislike,
    };
}

const MapDispatchToProps = (dispatch) => {
    return {
        loadImage: () => dispatch(loadImageAction()),
        likeImage: () => dispatch(likeAction()),
        dislikeImage: () => dispatch(dislikeAction()),
        finishUnsplashImage: () => dispatch(finishUnsplashImageAction())
    }
};

export default connect(MapStateToProps, MapDispatchToProps)(Image);