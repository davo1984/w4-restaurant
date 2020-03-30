import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class ShowMap extends Component {
  constructor(props){
    super(props);
  }
  state = { 
    camusLocation: { lat: - 91.131517, lng: -91.131517 },
  }
  
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={7}
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