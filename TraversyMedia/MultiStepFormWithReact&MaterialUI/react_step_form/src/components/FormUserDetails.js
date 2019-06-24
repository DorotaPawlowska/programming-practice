import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange} = this.props; 
        return (
                <React.Fragment>
                    <AppBar position="relative" color="primary" title="Enter User Details">
                        Enter User Details
                    </AppBar>
                    <TextField
                        label="Enter Your First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName} />
                        <br />

                    <TextField
                        label="Enter Your Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName} />
                        <br />

                    <TextField
                        label="Enter Your Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email} />
                        <br />

                    <Button 
                    variant="contained"
                    color="primary"
                    onClick={this.continue}>Continue</Button>

                </React.Fragment>
        )
    }
}

export default FormUserDetails;
