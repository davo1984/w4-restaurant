import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '90%',
  height: '80%'
};

export class ShowMap extends Component {
  constructor(props){
    super(props);
  }
  state = { 
    camusLocation: { lat: 38.092800, lng: -84.454870 },
  }
  
  render() {
    { console.log(this.state.props.camusLocation)}
    return (
      <Map
        google={this.props.google}
        zoom={5}
        style={mapStyles}
        initialCenter={ this.props.state.camusLocation }
      >
      <Marker 
        position={ this.props.state.camusLocation }
        onClick={this.onMarkerClick}
        name={"Camus' Absurdist Dining"} 
      />

      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >

        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div>
      </InfoWindow>
      </Map>
    );
  }
}

// open window with google map info
const onMarkerClick = (props, marker, e) => {
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
}

// close the google map window.  Window hidden when false.
const onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

export default GoogleApiWrapper({
  // apiKey: 'AIzaSyChuf6UEUwT1twd5cHHKuZEqVm643KL_Ek'
  apiKey: 'AIzaSyBiaAYMvJa3wuN__cCgONxjvyswiU47QTE'
})(Map);