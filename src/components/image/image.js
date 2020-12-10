import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getImageAction, likeImageAction, dislikeImageAction, finishUnsplashImageAction } from "../../state/actions/action";

const style = {
    container: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center'
    },
    button: {
        fontSize: '17px',
        height: '35px',
        width: '70px',
        margin: '10px',
        background: '#333',
        color: '#fff',
        border: '1px solid black',
    }
}

const Image = (props) => {

    useEffect(() => {
        props.getImage();
    }, [])

    const likeButtonPressed = (props.like === true) ? { background: '#24a0ed', color: 'black' } : {};
    const dislikeButtonPressed = (props.dislike === true) ? { background: '#ff4040', color: 'black' } : {};

    return (
        <div style={style.container} data-testid="random-img-page">
            {
                props.url !== "" ? <></> : <h2 data-testid="loading">Loading...</h2>
            }
            {
                props.error === true &&
                <div>
                    <h3>Unable to fetch image.</h3>
                    <button data-testid="retry-button" style={style.button} onClick={() => props.getImage()}>Retry</button>
                </div>
            }
            {
                props.url !== '' && props.error === false && props.finish === false &&
                <div>
                    <div>
                        <img data-testid="random-image" src={props.url} alt="Unsplash" />
                    </div>
                    <div>
                        <button data-testid="like-button" style={{ ...style.button, ...likeButtonPressed }} disabled={(props.like)} onClick={() => props.likeImage()}>Like</button>
                        <button data-testid="dislike-button" style={{ ...style.button, ...dislikeButtonPressed }} disabled={(props.dislike)} onClick={() => props.dislikeImage()}>Dislike</button>
                    </div>
                    <div>
                        <button data-testid="next-button" style={style.button} onClick={() => props.getImage()}>Next</button>
                        <Link to="/result">
                            <button data-testid="finish-button" style={style.button} onClick={() => props.finishUnsplashImage()}>Finish</button>
                        </Link>
                    </div>
                </div>
            }

        </div>
    )
}

const MapDispatchToProps = (dispatch) => {
    return {
        getImage: () => dispatch(getImageAction()),
        likeImage: () => dispatch(likeImageAction()),
        dislikeImage: () => dispatch(dislikeImageAction()),
        finishUnsplashImage: () => dispatch(finishUnsplashImageAction())
    }
}

const MapStateToProps = (state) => {
    return {
        url: state.image.url,
        error: state.image.error,
        like: state.image.like,
        dislike: state.image.dislike,
        finish: state.finish,
        totalLike: state.totalLike,
        totalDislike: state.totalDislike,
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Image);
