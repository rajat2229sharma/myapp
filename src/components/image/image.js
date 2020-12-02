import React from 'react'
import { connect } from "react-redux";
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
                </div>
            }
        </div>
    )
};

const MapStateToProps = (state) => {
    // console.log(state, 'state');
    return {
        url: state.image.url
    };
}

const MapDispatchToProps = (dispatch) => {
    return {
        loadImage: () => dispatch({type: 'LOAD_IMAGE'})
    }
};

export default connect(MapStateToProps, MapDispatchToProps)(Image);