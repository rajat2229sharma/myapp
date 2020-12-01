import React, { useState } from 'react'
import { connect } from "react-redux";
import { loadImageAction } from "../../state/actions/actions";
const Image = (props) => {
    console.log(props, 'store');
    const [error, setError] = useState(false);

    const handleRandomImage = () => {
        fetch('https://source.unsplash.com/random/300x300')
            .then(data => props.loadImage(data.url))
            .catch(err => {
                setError(true);
                props.loadImage('');
            })
    }

    return (
        <div>
            { props.url === '' && error === false &&
                <button onClick={() => handleRandomImage()}>
                    Start
                </button>
            }
            {
                props.url !== '' && error === false &&
                <div>
                    <div>
                        <img src={props.url} alt="Unsplash" />
                    </div>
                    <button onClick={() => handleRandomImage()}>
                        Next
                    </button>
                </div>
            }
        </div>
    )
};

const MapStateToProps = (state) => {
    console.log(state, 'state');
    return {
        url: state.image.url
    };
}

const MapDispatchToProps = (dispatch) => {
    return {
        loadImage: (value) => dispatch(loadImageAction(value))
    }
};

export default connect(MapStateToProps, MapDispatchToProps)(Image);