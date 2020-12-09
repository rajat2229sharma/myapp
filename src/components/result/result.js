import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Result = (props) => {
    return (
        <div data-testid="result-random-image">
            {
                props.finish === true ?
                    <div>
                        <div>
                            <h1>Result Here !</h1>
                            <p data-testid="total-like">Total Like : {props.totalLike}</p>
                            <p data-testid="total-dislike">Total Dislike : {props.totalDislike}</p>
                        </div>
                    </div>
                    :
                    <div>
                        <h2>Sorry!</h2>
                        <p>You havn't rate any pic.</p>
                        <p>Please go to Random Image Page.</p>
                        <Link to="/randomimage">
                            <button data-testid="finish-button">Random Image Page</button>
                        </Link>
                    </div>
            }
        </div>
    )
}

const MapStateToProps = (state) => {
    return {
        totalLike: state.totalLike,
        totalDislike: state.totalDislike,
        finish: state.finish
    }
}

export default connect(MapStateToProps, null)(Result);