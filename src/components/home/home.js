import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { loadImageAction } from '../../state/actions/actions';
const Home = (props) => {
    // console.log(props, 'props');
    return (
        <div data-testid="main-button">
            <Link to="/randomimage">
                <button data-testid="button-start" onClick={() => props.loadImage()}>
                    Start
                </button>
            </Link>
        </div>
    )
};

const MapDispatchToProps = (dispatch) => {
    return {
        loadImage: () => dispatch(loadImageAction()),
    }
};

export default connect(null, MapDispatchToProps)(Home);