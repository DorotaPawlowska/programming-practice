import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange} = this.props; 
        return (
                <React.Fragment>
                    <AppBar position="relative" color="primary" title="Enter User Details">
                        Enter Personal Details
                    </AppBar>
                    <TextField
                        label="Enter Your Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation} />
                        <br />

                    <TextField
                        label="Enter Your City"
                        onChange={handleChange('city')}
                        defaultValue={values.city} />
                        <br />

                    <TextField
                        label="Enter Your Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio} />
                        <br />

                    <Button 
                    variant="contained"
                    color="primary"
                    onClick={this.continue}>Continue</Button>

                    <Button 
                    variant="contained"
                    color="default"
                    onClick={this.back}>Back</Button>

                </React.Fragment>
        )
    }
}

export default FormPersonalDetails;
