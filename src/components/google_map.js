import React, { Component } from 'react';

class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map( this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        // ref='map' gives us this.refs.map which is the node
        // where the map get rendered to
        return (
            <div ref='map' />
        );
    }
}

export default GoogleMap;
