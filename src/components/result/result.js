import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles = {
    button: {
        fontSize: '17px',
        height: '35px',
        minWidth: '70px',
        margin: '10px',
        background: '#333',
        color: '#fff',
        border: '1px solid black',
    },
    container: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center'
    },
}

const Result = (props) => {
    return (
        <div style={styles.container} data-testid="result-page">
            {
                props.finish === true ?
                    <div>
                        <h2>Thanks!</h2>
                        <p>Result is:</p>
                        <div style={{ flexDirection: 'column' }}>
                            <p data-testid="total-like">Total Likes : {props.totalLike}</p>
                            <p data-testid="total-dislike">Total Dislikes : {props.totalDislike}</p>
                        </div>
                        <Link to="/">
                            <button data-testid="finish-button" style={styles.button}>Play Again !</button>
                        </Link>
                        <div style={{ margin: '30px 0', height: "150px", width: "600px" }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ width: "200px" }}>User Email</th>
                                        <th style={{ width: "200px" }}>Total Likes</th>
                                        <th style={{ width: "200px" }}>Total Dislikes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.userList.map((data) => (
                                            <tr key={data.email}>
                                                {console.log(data)}
                                                <td>{data.userEmail}</td>
                                                <td>{data.like}</td>
                                                <td>{data.dislike}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                    :
                    <div data-testid="sorry-message">
                        <h2 >Sorry!</h2>
                        <p>You havn't rate any pic.</p>
                        <p>Please go to Random Image Page.</p>
                        <Link to="/randomimage">
                            <button data-testid="finish-button" style={styles.button}>Random Image Page</button>
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
        finish: state.finish,
        userList: state.userList,
    }
}

export default connect(MapStateToProps, null)(Result);