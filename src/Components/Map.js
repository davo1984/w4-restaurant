import React, { Component } from "react";

class Map extends Component {
  componentDidMount() {
    this.initMap();
  }

  initMap() {
    let options = {
      zoom: this.props.zoom,
      center: this.props.center
    //   , mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let map = new window.google.maps.Map(
      document.getElementById("googleMap"),
      options
    );
  }

  render() {
    return <div id="map" />;
  }
}

export default Map;