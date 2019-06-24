import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        // process form  ===========================<<<<<<<===================
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {firstName, lastName, email, occupation, city, bio} } = this.props; 
        return (
                <React.Fragment>
                    <AppBar position="relative" color="primary" >
                        Confirm
                    </AppBar>
                    <List>
                        <ListItem>
                            <ListItemText 
                                primary="first Name"
                                secondary={ firstName }/>
                        </ListItem>

                        <ListItem>
                            <ListItemText 
                                primary="last name"
                                secondary={ lastName }/>
                        </ListItem>

                        <ListItem>
                            <ListItemText 
                                primary="email"
                                secondary={ email }/>
                        </ListItem>

                        <ListItem>
                            <ListItemText 
                                primary="occupation"
                                secondary={ occupation }/>
                        </ListItem>

                        <ListItem>
                            <ListItemText 
                                primary="city"
                                secondary={ city }/>
                        </ListItem>

                        <ListItem>
                            <ListItemText 
                                primary="bio"
                                secondary={ bio }/>
                        </ListItem>
                    </List>
                    <Button 
                    variant="contained"
                    color="primary"
                    onClick={this.continue}>Confirm & Continue</Button>

                    <Button 
                    variant="contained"
                    color="default"
                    onClick={this.back}>Back</Button>

                </React.Fragment>
        )
    }
}

export default Confirm;
