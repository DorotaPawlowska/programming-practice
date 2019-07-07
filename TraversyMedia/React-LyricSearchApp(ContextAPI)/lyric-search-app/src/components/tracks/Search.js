import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context'; 

export default class Search extends Component {

    state ={ 
        trackTitle: '',
        artistName: ''
    }

    // bind(this) or use arrow function 
    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    formSubmit = (dispatch, e) => {
        e.preventDefault();

        if(!this.state.trackTitle){
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_artist=${this.state.artistName}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_KEY}`)
            .then( res => {
                // console.log(res.data);
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.message.body.track_list
                });
                this.setState({ trackTitle: '', artistName: ''})
                // this.setState({track_list: res.data.message.body.track_list})
            })
            .catch( err => console.log(err));
        } else if(!this.state.artistName) {
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_KEY}`)
            .then( res => {
                // console.log(res.data);
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.message.body.track_list
                });
                this.setState({ trackTitle: '', artistName: ''})
                // this.setState({track_list: res.data.message.body.track_list})
            })
            .catch( err => console.log(err));
        }


    }

    render() {
        return (
            <Consumer>                
                { value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                                <i className="fas fa-music"></i>Search for a Song
                            </h1>
                            <p className="lead text-center">Get the lyrics for any song</p>
                            <form onSubmit={this.formSubmit.bind(this, dispatch)}>
                                <div className="form-group">
                                    <input type="text" 
                                    className="form-control form-control-lg mb-4" placeholder="song title ... "
                                    name="trackTitle"
                                    value={this.state.trackTitle}
                                    onChange={this.onChange.bind(this)}/>

                                    or type artist name: 

                                    <input type="text" 
                                    className="form-control form-control-lg mt-4" placeholder="artist name ... "
                                    name="artistName"
                                    value={this.state.artistName}
                                    onChange={this.onChange.bind(this)}/>
                                </div>
                                <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">search</button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        
        )
    }
}
