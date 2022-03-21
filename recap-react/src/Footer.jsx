import React, { Component } from 'react';

const nStyle = {

    padding: "1rem",
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
};

class Footer extends Component {
    render() {
        return (
            <div>
                <p style={nStyle}>Copyright {new Date().getFullYear()}</p> 
            </div>
        )
    }
}

export default Footer;