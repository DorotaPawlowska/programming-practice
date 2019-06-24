import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';


export class Success extends Component {

    render() {
        return (
                <React.Fragment>
                    <AppBar position="relative" color="primary" >
                        Success
                    </AppBar>
                    <h1>thank you for your submission</h1>
                    <p>email</p>
                </React.Fragment>
        )
    }
}

export default Success;
