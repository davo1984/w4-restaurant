// import React from 'react';
import React, { Component } from "react"
import { faTrademark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './App.css';
// import FleurDuLisMap from './Components/FleurDuLisMap.js';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class App extends Component {
    constructor(props) {
      super(props);
  }
  state = {

    "created_at": {
      "date": "2020-03-29 00:03:26.808224",
        "timezone_type": 3,
          "timezone": "UTC"
    },

    "menu_size": 12,

    "menu_items": [
      {
        "description": "Spicy eggplant with vibrant cabbage and adorable peas"
      },
      {
        "description": "Smoky beef ribs with pugnacious tomatoes and watery squash"
      },
      {
        "description": "Frosted beef ribs with canned corn and enveloped spinach"
      },
      {
        "description": "Shaved trout with pan-fried cauliflower and tepid pepper medley"
      },
      {
        "description": "Peppered tuna steak with overturned squash and chopped broccoli"
      },
      {
        "description": "Smashed beef ribs with pan-fried green beans and peppered broccoli"
      },
      {
        "description": "Vibrant tofu with aggressive pumpkin and fragrant carrots"
      },
      {
        "description": "Peevish omelet with roasted brussel sprouts and overturned black beans"
      },
      {
        "description": "Undaunted tuna steak with tepid corn and watery green beans"
      },
      {
        "description": "Impertinent beef ribs with vibrant asparagus and canned spinach"
      },
      {
        "description": "Sauteed pasta with pensive cabbage and swaddled onions"
      },
      {
        "description": "Pulverized shrimp with carmelized green beans and canned corn"
      }
    ]
  }

  render() {
    return (
      <div className="App">

      <div className="row">
          <div className="col-2">
            <p>TEST FIRST 2 columns</p>
          </div>
          <div className="col-8">
          <img src="./images/fleur-de-lis.jpeg" /><p>5655 Government Street<br />Baton Rouge, LA</p>
        <a href="#" type="button" className="btn btn-info">Info</a>
        <button type="button" className="btn btn-success">Dave O</button>
          </div>
          <div className="col-2">
            <h1>Visit our old location!</h1>

            <div id="googleMap">
              <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: -91.131517, lng: 30.444879 }}
              />
            </div>

            <p>TEST LAST2 columns</p>
          </div>
      </div>

      {/*  test of accordian below! */}
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Life is Uncertain, Eat Desert FIRST!<FontAwesomeIcon icon={faTrademark} /></button>
              </h5>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Hors d'oeuvres and Appetizers</button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Main Courses</button>
              </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;