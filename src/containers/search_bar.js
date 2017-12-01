import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) { // event object is a vanilla js thing, not react
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState( {term: ''} );
    }

  render() {
      return (
        <form onSubmit={this.onFormSubmit} className='input-group'>
            <input
                placeholder='Enter city name to get 5-day forcast'
                className='form-control'
                value = {this.state.term}
                onChange = {this.onInputChange}
            />
            <span className='input-group-btn'>
                <button type='submit' className='btn btn-secondary'> Submit </button>

            </span>
        </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
// null in 1st arg means that we don't need any state here even though
// redux is maintaining the states
