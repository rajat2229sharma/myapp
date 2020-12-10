import React from "react";
import { Link } from "react-router-dom";

const styles = {
    navbar: {
        height: "75px",
        width: "100%",
        position: 'fixed',
        top: 0,
        left: 0,
        background: "#333",
        zIndex: '10',
        padding: '0 20px',
        color: '#fff'
    },
    list: {
        listStyle: 'none',

    },
    listItem: {
        display: 'inline',
        margin: '0 20px',
        color: 'white',
    }

}

const Navabar = () => {
    return (
        <div style={styles.navbar} data-testid="nav-bar">
            <div style={{ display: 'inline-block' }}>
                <h2 data-testid="app-name">Unsplash Random Image</h2>
            </div>
            <div style={{ display: 'inline-block' }}>
                <ul style={styles.list}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li data-testid="nav-item-home" style={styles.listItem}>Home</li>
                    </Link>
                    <Link to="randomimage" style={{ textDecoration: 'none' }}>
                        <li data-testid="nav-item-random-image" style={styles.listItem}>Random Image</li>
                    </Link>
                    <Link to="/result" style={{ textDecoration: 'none' }}>
                        <li data-testid="nav-item-result" style={styles.listItem}>Result</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navabar;