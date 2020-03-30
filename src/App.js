import React, { Component } from "react";
import { faTrademark, faCocktail, faLungsVirus, faCloudMeatball, faFlushed } from "@fortawesome/free-solid-svg-icons";
import { faGrav } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';
import ShowMap from './Components/ShowMap.js';
import NavMenu from './Components/NavMenu.js';
import AccordianMenu from './Components/AccordianMenu.js';
import RetrieveMenuItems from './Components/RetrieveMenuItems.js';

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

        <div className="row mx-3">
          <div className="col-3">
            <h1>Camus&#39; Absurdist Dining</h1>
            <p>Even after you Fall don't be a Stranger!<FontAwesomeIcon icon={faGrav} /></p>
            <p>Hours:</p>
            <ul className="list-group mx-auto">
              <li className="list-group-item">Mon: Midnight - 8 AM</li>
              <li className="list-group-item">Tue: 9 pm - 8 AM</li>
              <li className="list-group-item">Wed: 3 am - 7 AM</li>
              <li className="list-group-item">Thr: 7 GMT - 8 AM</li>
              <li className="list-group-item">Fri: 3 am - 7 AM</li>
              <li className="list-group-item">Sat: 9 pm - 8 AM</li>
              <li className="list-group-item">Sun: Midnight - 8 AM</li>
            </ul>
          </div>
          <div className="col-6">
            <img src="./images/fleur-de-lis.jpeg" className="rounded-circle mt-1" alt="Our establishment" /><p>348 East Main Street<br />Lexington, KY</p>
            <NavMenu />
          </div>
          <div className="col-3 text-center">
            <h1>Visit our old location!</h1>

            <div id="googleMap" className="pb-5">
              <ShowMap />
            </div>

          </div>
        </div>

        <AccordianMenu />
      </div>
    );
  }
}

export default App;
