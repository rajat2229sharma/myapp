import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, StaticRouter } from 'react-router-dom';
import { getImageAction, resetAllStateAction, setCurrentUserAction } from "../../state/actions/action";

const styles = {
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

const Home = (props) => {

    const [userCurrentEmail, setCurrentUserEmail] = useState('');

    useEffect(() => {
        props.resetAllState();
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.setCurrentUser(userCurrentEmail);

    }

    const handleEmailOnChange = (e) => {
        setCurrentUserEmail(e.target.value);
    }


    return (
        <div style={styles.container} data-testid="home-page">
            {
                props.currentUser === '' &&
                <div>
                    <p>Enter Your Email:</p>
                    <form onSubmit={handleOnSubmit}>
                        <input type="email" name="userCurrentEmail" value={userCurrentEmail} onChange={handleEmailOnChange} placeholder="Enter Your Email" />
                        <button type="submit">Submit</button>
                        <br />
                        <small style={{ color: "grey" }}>Please enter unique email.</small>
                    </form>
                </div>
            }
            {
                props.currentUser !== '' &&
                <div>
                    <p>{`Welcome ${props.currentUser} !`}</p>
                    <Link to="/randomimage">
                        <button data-testid="start-button" style={styles.button} onClick={() => props.getImage()}>
                            Start
                    </button>
                    </Link>
                </div>
            }
        </div>
    )
}

const MapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
    }
}
const MapDispatchToProps = (dispatch) => {
    return {
        resetAllState: () => dispatch(resetAllStateAction()),
        getImage: () => dispatch(getImageAction()),
        setCurrentUser: (email) => dispatch(setCurrentUserAction(email)),
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Home);