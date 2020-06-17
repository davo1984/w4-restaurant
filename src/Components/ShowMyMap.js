import React, { Component } from 'react';
import MyGoogleKey from './MyGoogleKey.js';
import ReactDependentScript from "react-dependent-script";
import Map from "./Components/Map";

const mapStyles = {
    width: '90%',
    height: '80%'
};

function ShowMyMap() {
    return(
        <ReactDependentScript
      scripts = {
            [
            "https://maps.googleapis.com/maps/api/js?key=" + MyGoogleKey()
            ]}
            >
            {/* <Map center={{ lat: 38.092800, lng: -84.4548704 }} zoom={13} /> */}
    </ReactDependentScript>
    );
}
export default ShowMyMap;